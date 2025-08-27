interface SearchBoxProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({ onChangeHandler }: SearchBoxProps) => {
  return (
    <div role="search">
      <label htmlFor="search" className="sr-only font-roboto">Search characters</label>
      <input
        id="search"
        type="search"
        className="font-roboto border border-gray-400 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        onChange={onChangeHandler}
        placeholder="Search..."
        aria-label="Search characters"
      />
    </div>
  );
};
