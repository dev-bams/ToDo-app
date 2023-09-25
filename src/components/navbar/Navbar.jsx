import SearchBar from "../search-bar/SearchBar";
// import DarkMode from "../../assets/icons/DarkMode";
import LightMode from "../../assets/icons/LightMode";

const Navbar = () => {
  return (
    <nav className=" flex justify-between h-12 items-center border-b pl-4 pr-4 pt-2 pb-2 bg-dark-nav-color border-dark-line-color">
      <h4>To Do</h4>
      <SearchBar />
      <LightMode />
    </nav>
  );
};

export default Navbar;
