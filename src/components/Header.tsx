import { NavLink } from 'react-router';
//import SearchIconSVG from '../assets/images/icons/search-icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="nav-left">
        <NavLink className="logo-link header-link" to="/">
          <img className="logo-icon" src="/page-favicon.svg" />
          <div className="logo-text">
            CompAmazon
          </div>
        </NavLink>
      </div>

      <div className="nav-search">
        <input className="search-bar" type="Text" placeholder="Search for anything" />

        <button className="search-button">
          <SearchIcon className = "search-icon" />
        </button>
      </div>

      <div className="nav-right">
        <BookmarksIcon className="bookmarks-icon"/>
        <Avatar className="user-avatar">
          <PersonIcon />
        </Avatar>
      </div>

    </div>
  );
}
export default Header;