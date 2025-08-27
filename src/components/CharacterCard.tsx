import { Person } from '@/types/Person';

export default function CharacterCard({ person, id }: { person: Person; id: string }) {
  const imgUrl = `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`;

  return (
    <article className="group bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="h-40 w-full mb-3 bg-slate-100 rounded overflow-hidden flex items-center justify-center">
        <img src={imgUrl} alt={`${person.name} avatar`} className="object-cover h-full w-full" />
      </div>
      <h3 className="text-lg font-semibold">{person.name}</h3>
      <dl className="mt-2 text-sm text-slate-600 grid grid-cols-2 gap-1">
        <div>
          <dt className="font-medium">Gender</dt>
          <dd>{person.gender}</dd>
        </div>
        <div>
          <dt className="font-medium">Birth</dt>
          <dd>{person.birth_year}</dd>
        </div>
      </dl>
    </article>
  );
}
