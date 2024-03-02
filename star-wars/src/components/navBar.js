import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './header';
import '../styles/navBar.css';

function Navbar () {
  const location = useLocation();
    return (
        <div className='container-navbar'>
          <Header />
          <nav className="navbar">
            <form class="container-fluid justify-content-start">
            <Link to="/" className={`btn btn-sm btn-outline-secondary ${location.pathname === '/' ? 'active' : ''}`} type="button" id='btn-home'>HOME</Link>
            <Link to="/list" className={`btn btn-sm btn-outline-secondary ${location.pathname === '/list' ? 'active' : ''}`} type="button" id='btn-starships'>STARSHIPS</Link>
            </form>
          </nav>
        </div>
    )
}

export default Navbar;