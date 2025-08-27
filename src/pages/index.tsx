import { useEffect, useState } from 'react';
import { Person } from '@/types/Person';
import CharacterCard from '@/components/CharacterCard';
import { SearchBox } from '@/components/SearchBox';
import { Pagination } from '@/components/Pagination';
import { fetchPeople } from '@/utils/api';

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;

useEffect(() => {
  const controller = new AbortController();
  setLoading(true);

  fetchPeople(page, search, controller.signal)
    .then(({ results, totalCount }) => {
      setPeople(results);
      setTotalPages(Math.max(1, Math.ceil(totalCount / itemsPerPage)));
    })
    .catch(error => {
      if ((error as any).name !== 'AbortError') {
        console.error('Failing data fetching:', error);
      }
    })
    .finally(() => setLoading(false));

  return () => controller.abort();
}, [page, search]);

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPage(1);
  setSearch(e.target.value);
}

const getIdFromUrl = (url: string) => {
  const match = url.match(/people\/(\d+)\//);
  return match ? match[1] : '';
}

  return (
    <>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">AllianceBook</h1>
        <SearchBox onChangeHandler={handleSearchChange} />
        {loading ? (
          <div className="py-10 text-center">Loading...</div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {people.map((person) => {
              return <CharacterCard key={person.url} person={person} id={getIdFromUrl(person.url)} />;
            })}
          </ul>
        )}
      </main>
      <footer className="p-6">
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </footer>
    </>
  );
}
