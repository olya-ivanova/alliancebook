import { Gender } from "@/types/types";

interface FilterProps {
  gender: Gender;
  setGender: (gender: Gender) => void;
}

export const Filter = ({ gender, setGender }: FilterProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value as Gender);
  };

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="genderFilter" className="font-roboto">
        Filter:
      </label>
      <select
        id="genderFilter"
        value={gender}
        onChange={handleChange}
        aria-label="Filter characters by gender"
        className="px-2 py-1 rounded border border-gray-700 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 font-roboto"
      >
        <option value={Gender.All}>All</option>
        <option value={Gender.Male}>Male</option>
        <option value={Gender.Female}>Female</option>
        <option value={Gender.Other}>Other / Unknown</option>
      </select>
    </div>
  );
};
