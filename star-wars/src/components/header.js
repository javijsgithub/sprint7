import React, { useContext, /*useEffect*/ } from 'react';
import { Link } from 'react-router-dom';
import { StarWarsContext } from '../context/starWarsContext';
import '../styles/header.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Header () {
  const { loggedIn, user, handleLogout, /*fetchUserData*/ } = useContext(StarWarsContext);
  if (user) {
    console.log('El usuario está definido en el estado del contexto');
  } else {
    console.log('El usuario NO está definido en el estado del contexto');
  }
  /*useEffect(() => {
    if (loggedIn) {
      fetchUserData(); // Obtener datos del usuario cuando el usuario está autenticado
    }
  }, [loggedIn, fetchUserData]);*/

  const handleLogoutClick = () => {
    handleLogout(); // Llama a la función handleLogout del context
};


    return (
      <div className="container-header">
        <div className="row-header">
          <div className="col redes">
          <FaInstagram /> <FaFacebook /> <FaSquareXTwitter /> <FaYoutube />
          </div>
          <div className="col logo">
            <img src= {require(`../images/Star-Wars-symbol.jpg`)} alt="Logo StarWars" width="200" height="100" className="starwars-logo" />
          </div>
          <div className="col log-sign">
            {loggedIn ? (
              <>
              <Link to="/" onClick={handleLogoutClick} className="btn btn-secondary" id='btn-log-out'>LOG OUT</Link>
              </>
            ) : (
              <Link to="/login" className="btn btn-secondary" id='btn-log-in'>LOG IN</Link>
            )}
            {!loggedIn && (
              <Link to="/register" className="btn btn-secondary" id='btn-sign-up'>SIGN UP</Link>
            )}
          </div>
        </div>
      </div>
    )
}

export default Header;
