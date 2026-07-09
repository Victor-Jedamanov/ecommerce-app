import { useState } from 'react';
import { NavLink, useNavigate } from "react-router";
//import SearchIconSVG from '../assets/images/icons/search-icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';

function Header({ searchText = '' } : { searchText?: string }) {
  const [inputText, setInputText] = useState(searchText);

  function saveInputText(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  const navigate = useNavigate();
  function startSearch() {
    if (inputText === '') {
      navigate({
        pathname: '/'
      });
    } else {
      navigate({
        pathname: '/search',
        search: `?key=${inputText}`
      });
    }
  }

  function keyPressed(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      startSearch();
    }
  }

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
        <input
          className="search-bar"
          onChange={saveInputText}
          value={inputText}
          onKeyDown={keyPressed}
          //type="Text"
          placeholder="Search for anything"
        />

        <button className="search-button">
          <SearchIcon
            onClick={startSearch}
            className="search-icon"
          />
        </button>
      </div>

      <div className="nav-right">
        <NavLink className="header-link" to="/bookmarks">
          <BookmarksIcon className="bookmarks-icon" />
        </NavLink>

        <Avatar className="user-avatar">
          <PersonIcon />
        </Avatar>
      </div>

    </div>
  );
}
export default Header;