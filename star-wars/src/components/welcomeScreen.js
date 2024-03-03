import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navBar';
import '../styles/welcomeScreen.css';

function WelcomeScreen() {
    return (
      <div className='container-content'>
         <Navbar />
        <div className="container-welcome shadow p-3">
          <h1>WELCOME TO OUR STAR WARS WEBSITE</h1>
          <h5 className='proposito'>This application will allow you to view our list of ships with all their details.</h5>
        </div>
        <div className='container-btn-go'>
          <Link to="/list" className="btn btn-secondary" id='btn-go'>Go to ship list</Link>
        </div>
      </div>
    );
  }
  
  export default WelcomeScreen;