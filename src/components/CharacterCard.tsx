import { Person } from '@/types/types';
import Image from "next/image";

export default function CharacterCard({ person, id }: { person: Person; id: string }) {
  const imgUrl = `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`;

  return (
    <article className="group flex flex-col bg-white border border-gray-200 rounded-xl p-4 shadow-md transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="relative w-full mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <Image
          src={imgUrl}
          alt={`${person.name} avatar`}
          className="h-full w-full object-cover"
          width={280}
          height={460}
        />
      </div>

      <h3 className="text-lg font-semibold truncate mb-2">{person.name}</h3>

      <dl className="text-sm text-gray-600 grid grid-cols-2 gap-2">
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
