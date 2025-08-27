import { useState } from 'react';
import CharacterCard from '@/components/CharacterCard';
import { SearchBox } from '@/components/SearchBox';
import { Pagination } from '@/components/Pagination';
import { Filter } from '@/components/Filter';
import { Loading } from '@/components/Loading';
import { Gender } from '@/types/types';
import { useFetchPeople } from '@/hooks/useFetchPeople';
import { useFilteredPeople } from '@/hooks/useFilteredPeople';

export default function Home() {
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState<Gender>(Gender.All);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const { people: allPeople, loading } = useFetchPeople();
  const { currentPagePeople, totalPages } = useFilteredPeople({
    allPeople,
    search,
    gender,
    page,
    itemsPerPage,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const handleGenderChange = (newGender: Gender) => {
    setPage(1);
    setGender(newGender);
  };

  const getIdFromUrl = (url: string) => url.match(/people\/(\d+)\//)?.[1] ?? '';

  if (loading || allPeople.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <main className="p-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="font-orbitron text-2xl font-bold text-orange-500">AllianceBook</h1>
          <p className="font-roboto tracking-wider">The intergalactic archive of characters.</p>
        </div>

        <div className="flex flex-col my-8 md:my-16 md:flex-row md:items-center justify-between gap-8">
          <SearchBox onChangeHandler={handleSearchChange} />
          <Filter gender={gender} setGender={handleGenderChange} />
        </div>

        {currentPagePeople.length ? (
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
