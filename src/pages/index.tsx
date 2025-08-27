import { useEffect, useState, useMemo } from 'react';
import { Person, Gender } from '@/types/types';
import CharacterCard from '@/components/CharacterCard';
import { SearchBox } from '@/components/SearchBox';
import { Pagination } from '@/components/Pagination';
import { Filter } from '@/components/Filter';
import { fetchAllPeople } from '@/utils/api';

export default function Home() {
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState<Gender>('all');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchAllPeople(controller.signal).then((people) => {
      setAllPeople(people);
      setLoading(false);
    });

    return () => controller.abort();
  }, []);

  const filteredPeople = useMemo(() => {
    return [...allPeople].filter(p => {
      const matchesGender =
        gender === 'all'
          ? true
          : gender === 'other'
          ? !['male', 'female'].includes(p.gender.toLowerCase())
          : p.gender.toLowerCase() === gender;

      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
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
  }

  const handleGenderChange = (newGender: Gender) => {
    setPage(1);
    setGender(newGender);
  }

  const getIdFromUrl = (url: string) => {
    const match = url.match(/people\/(\d+)\//);
    return match ? match[1] : '';
  }

  return (
    <>
      <main className="p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">AllianceBook</h1>

        <div className="flex flex-col my-8 md:flex-row md:items-center justify-between">
          <SearchBox onChangeHandler={handleSearchChange} />
          <Filter gender={gender} setGender={handleGenderChange} />
        </div>

        {loading ? (
          <div className="py-20 text-center">Loading…</div>
        ) : (
          <>
            {currentPagePeople.length === 0 ? (
              <div className="py-10 text-center text-slate-600">No characters found.</div>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {currentPagePeople.map((p) => (
                  <li key={p.url}>
                    <CharacterCard person={p} id={getIdFromUrl(p.url)} />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </main>
      <footer>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </footer>
    </>
  );
}
