import SearchBar from "../search-bar/SearchBar";
// import DarkMode from "../../assets/icons/DarkMode";
import LightMode from "../../assets/icons/LightMode";

const Navbar = () => {
  return (
    <nav className=" flex justify-between h-12 items-center bg-dark-secondary-bg border-b-2">
      <h4>To Do</h4>
      <SearchBar />
      <LightMode />
    </nav>
  );
};

export default Navbar;
