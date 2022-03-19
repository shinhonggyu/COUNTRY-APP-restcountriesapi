import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-box">
      <div className="search-box__wrapper">
        <Input className="search-input" placeholder="Search" disableUnderline />
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
};

export default Search;
