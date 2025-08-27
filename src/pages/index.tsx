import { useEffect, useState } from 'react';
import { Person } from '@/types/Person';
import CharacterCard from '@/components/CharacterCard';
import { SearchBox } from '@/components/SearchBox';

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/people/')
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">AllianceBook</h1>
      <SearchBox onChangeHandler={(e) => setSearch(e.target.value)}/>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {people
        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .map((p) => {
          const idMatch = p.url.match(/people\/(\d+)\//);
          const id = idMatch ? idMatch[1] : '';
          return <CharacterCard key={p.url} person={p} id={id} />;
        })}
      </ul>
    </main>
  );
}
