import { Person } from '@/types/types';
import { formatBirthYear } from '@/utils/formatBirthYear';
import { cn } from '@/lib/utils';
import { orbitron, roboto } from '@/fonts/fonts';

export default function CharacterCard({ person, id }: { person: Person; id: string }) {
  const imgUrl = `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`;

  return (
    <article
      tabIndex={0}
      className="group h-full flex flex-col bg-white border border-gray-200 rounded-xl p-4 shadow-md transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
    >
      <div className="w-full mb-4 rounded-xl overflow-hidden bg-gray-200" style={{ aspectRatio: "280 / 460" }}>
        <img
          src={imgUrl}
          alt={`${person.name} avatar`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <h3 className={cn(orbitron.className, "text-lg font-semibold truncate mb-2")}>{person.name}</h3>

      <dl className="text-sm text-gray-600 flex flex-row gap-4">
        <div>
          <dt className={cn(roboto.className, "font-medium")}>Gender</dt>
          <dd>{person.gender}</dd>
        </div>
        <div>
          <dt className={cn(roboto.className, "font-medium")}>Birth</dt>
          <dd>{formatBirthYear(person.birth_year)}</dd>
        </div>
      </dl>
    </article>
  );
}
