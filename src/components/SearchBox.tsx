interface SearchBoxProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({onChangeHandler}: SearchBoxProps ) => {
  return (
    <input
      type="search"
      className="border border-gray-400 rounded p-2 w-full md:w-1/3"
      onChange={onChangeHandler}
      placeholder="Search..."
    />
  );
};