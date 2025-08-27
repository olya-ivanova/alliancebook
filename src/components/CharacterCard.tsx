import { Person } from '@/types/Person';
import Image from "next/image";

export default function CharacterCard({ person, id }: { person: Person; id: string }) {
  const imgUrl = `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`;

  return (
    <article className="group flex flex-col bg-[#6cdad8] border border-gray-400 rounded-md p-4 cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105">
      <div className="relative w-full mb-3 rounded overflow-hidden bg-slate-100 flex items-center justify-center">
        <Image
          src={imgUrl}
          alt={`${person.name} avatar`}
          className="h-full w-full object-cover"
          width={260}
          height={460}
        />
      </div>

      <h3 className="text-lg font-semibold truncate">{person.name}</h3>

      <dl className="mt-2 text-sm text-slate-700 grid grid-cols-2 gap-1">
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
