import React from 'react';
import logo from '../../Assets/images/logo.svg';
import home from '../../Assets/images/home-icon.svg';
import search from '../../Assets/images/search-icon.svg';
import watchlist from '../../Assets/images/watchlist-icon.svg';
import originals from '../../Assets/images/original-icon.svg';
import movies from '../../Assets/images/movie-icon.svg';
import series from '../../Assets/images/series-icon.svg';
import userPhoto from '../../Assets/images/user photo.jpg';

import './header.styles.scss';

const Header = () => {
  return (
    <nav className='header-nav'>
      <img className='header-logo' src={logo} alt='logo' />
      <div className='nav-menu'>
        <a href='/#'>
          <img src={home} alt='home' />
          <span>HOME</span>
        </a>
        <a href='/#'>
          <img src={search} alt='home' />
          <span>SEARCH</span>
        </a>
        <a href='/#'>
          <img src={watchlist} alt='home' />
          <span>WATCHLIST</span>
        </a>
        <a href='/#'>
          <img src={originals} alt='home' />
          <span>ORIGINALS</span>
        </a>
        <a href='/#'>
          <img src={movies} alt='home' />
          <span>MOVIES</span>
        </a>
        <a href='/#'>
          <img src={series} alt='home' />
          <span>SERIES</span>
        </a>
      </div>
      <img src={userPhoto} alt='' className='header-user-image' />
    </nav>
  );
};

export default Header;
