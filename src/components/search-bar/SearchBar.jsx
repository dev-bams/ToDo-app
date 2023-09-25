import Search from "../../assets/icons/Search";
function SearchBar() {
  return (
    <div className="flex items-center bg-dark-secondary-bg h-full">
      <Search />
      <input className=" bg-transparent outline-none border-none" type="text" />
    </div>
  );
}

export default SearchBar;
