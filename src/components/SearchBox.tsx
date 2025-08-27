interface SearchBoxProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({onChangeHandler}: SearchBoxProps ) => {
  return (
    <input
      type="search"
      className="border rounded p-2 w-full my-4 md:w-1/3"
      onChange={onChangeHandler}
      placeholder="Search..."
    />
  );
};