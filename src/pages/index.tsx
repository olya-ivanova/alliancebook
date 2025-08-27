import { useEffect, useState, useMemo } from 'react';

import CharacterCard from '@/components/CharacterCard';
import { SearchBox } from '@/components/SearchBox';
import { Pagination } from '@/components/Pagination';
import { Filter } from '@/components/Filter';
import { Loading } from '@/components/Loading';

import { Person, Gender } from '@/types/types';

import { fetchAllPeople } from '@/utils/api';

export default function Home() {
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState<Gender>(Gender.All);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 12;

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();

    fetchAllPeople(controller.signal)
      .then((people) => setAllPeople(people))
      .catch((err) => {
        if ((err as any).name !== 'AbortError') console.error(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const filteredPeople = useMemo(() => {
    return allPeople.filter((person) => {
      const genderLower = person.gender.toLowerCase();

      const matchesGender =
        gender === Gender.All
          ? true
          : gender === Gender.Other
          ? genderLower !== Gender.Male && genderLower !== Gender.Female
          : genderLower === gender;

      const matchesSearch = person.name.toLowerCase().includes(search.toLowerCase());

      return matchesGender && matchesSearch;
    });
  }, [allPeople, search, gender]);

  const totalPages = Math.max(1, Math.ceil(filteredPeople.length / itemsPerPage));

  const currentPagePeople = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredPeople.slice(start, start + itemsPerPage);
  }, [filteredPeople, page]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const handleGenderChange = (newGender: Gender) => {
    setPage(1);
    setGender(newGender);
  };

  const getIdFromUrl = (url: string) => {
    const match = url.match(/people\/(\d+)\//);

    return match ? match[1] : '';
  };

  if (loading || allPeople.length === 0) {
    return <Loading />
  }

  return (
    <>
      <main className="p-4 max-w-6xl mx-auto">
        <h1 className="font-orbitron text-2xl font-bold text-orange-500">AllianceBook</h1>
        <p className="font-roboto">The intergalactic archive of characters.</p>

        <div className="flex flex-col my-8 md:my-16 md:flex-row md:items-center justify-between gap-8">
          <SearchBox onChangeHandler={handleSearchChange} />
          <Filter gender={gender} setGender={handleGenderChange} />
        </div>

        {currentPagePeople.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
            {currentPagePeople.map((p) => (
              <li key={p.url}>
                <CharacterCard person={p} id={getIdFromUrl(p.url)} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="font-roboto py-10 text-center text-slate-600">No characters found.</div>
        )}
      </main>

      <footer>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </footer>
    </>
  );
}
