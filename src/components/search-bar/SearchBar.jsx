import Search from "../../assets/icons/Search";
function SearchBar() {
  return (
    <div className="flex items-center border-2">
      <Search />
      <input className=" bg-transparent outline-none border-none" type="text"  />
    </div>
  );
}

export default SearchBar;
