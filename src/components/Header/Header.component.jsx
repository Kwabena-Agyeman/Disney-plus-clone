import React, { useEffect } from 'react';
import logo from '../../Assets/images/logo.svg';
import home from '../../Assets/images/home-icon.svg';
import search from '../../Assets/images/search-icon.svg';
import watchlist from '../../Assets/images/watchlist-icon.svg';
import originals from '../../Assets/images/original-icon.svg';
import movies from '../../Assets/images/movie-icon.svg';
import series from '../../Assets/images/series-icon.svg';

import { useHistory, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userSignIn, signOutUser } from '../../Redux/User/User-Actions';

import { auth, provider } from '../../Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

import gravatar from 'gravatar';

import './header.styles.scss';

export const Header = (props) => {
  const { user, signIn, signOut } = props;
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const photoURL = gravatar.url(user.email, { s: '200', r: 'pg', d: 'mm' });
        let currentUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };
        console.log();
        await signIn(currentUser);
        await history.push('/');
      }
    });
  }, []);

  if (user) {
    console.log(user);
    return (
      <nav className='header-nav'>
        <img
          onClick={() => {
            history.push('/');
          }}
          className='header-logo'
          src={logo}
          alt='logo'
        />
        <div className='nav-menu'>
          <Link to='/'>
            <img src={home} alt='home' />
            <span>HOME</span>
          </Link>
          <a href='#'>
            <img src={search} alt='home' />
            <span>SEARCH</span>
          </a>
          <a href='#'>
            <img src={watchlist} alt='home' />
            <span>WATCHLIST</span>
          </a>
          <a href='#'>
            <img src={originals} alt='home' />
            <span>ORIGINALS</span>
          </a>
          <a href='#'>
            <img src={movies} alt='home' />
            <span>MOVIES</span>
          </a>
          <a href='#'>
            <img src={series} alt='home' />
            <span>SERIES</span>
          </a>
        </div>
        <div className='user-image-container'>
          <img className='profile-picture' src={user.photo} alt='' />
          <p className='header-user-image'>{user.name}</p>
          <i className='bi bi-caret-down'></i>
          <div className='signOut-hover'>
            <button
              className='signOut-button'
              onClick={async () => {
                await auth.signOut();
                await signOut();
                await history.push('/login');
              }}
            >
              SIGNOUT
            </button>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='header-nav'>
        <img className='header-logo' src={logo} alt='logo' />
        <button
          id='test'
          onClick={() => {
            auth.signInWithPopup(provider);
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
          }}
          className='loginBtn'
        >
          LOGIN
        </button>
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => {
      dispatch(userSignIn(user));
    },
    signOut: () => {
      dispatch(signOutUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
