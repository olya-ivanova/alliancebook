import { Gender } from "@/types/types";

interface FilterProps {
  gender: Gender;
  setGender: (gender: Gender) => void;
}

export const Filter = ({gender, setGender}: FilterProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">Filter:</span>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value as Gender)}
        className="px-2 py-1 rounded border border-gray-400 focus:outline-none"
      >
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other / Unknown</option>
      </select>
    </div>
  );
}