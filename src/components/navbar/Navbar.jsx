import SearchBar from "../search-bar/SearchBar";
import DarkMode from "../../assets/icons/DarkMode";
import LightMode from "../../assets/icons/LightMode";

const Navbar = () => {
  return (
    <nav className=" flex">
      <h4>To Do</h4>
      <SearchBar />
      <LightMode />
    </nav>
  );
};

export default Navbar;
