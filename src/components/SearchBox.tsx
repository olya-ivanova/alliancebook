interface SearchBoxProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({onChangeHandler}: SearchBoxProps ) => {
  return (
    <input
      type="search"
      className="border rounded p-2 md:my-4 w-1/3"
      onChange={onChangeHandler}
      placeholder="Search..."
    />
  );
};