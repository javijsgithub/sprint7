import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navBar';
import '../styles/welcomeScreen.css';

function WelcomeScreen() {
    return (
      <div className='container-content'>
         <Navbar />
        <div className="container-welcome shadow p-3">
          <h1>BIENVENIDO/A A NUESTRA WEB DE STARWARS</h1>
          <h5 className='proposito'>Esta aplicación te permitirá visualizar nuestro listado de naves con todos sus detalles.</h5>
        </div>
        <div className='container-btn-go'>
          <Link to="/list" className="btn btn-secondary" id='btn-go'>Ir al listado de naves</Link>
        </div>
      </div>
    );
  }
  
  export default WelcomeScreen;