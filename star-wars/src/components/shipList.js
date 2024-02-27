import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import { Link } from 'react-router-dom';
import Navbar from './navBar';
import '../styles/shipList.css';

const ShipsList = () => {
  const { ships, loadMoreShips } = useContext(StarWarsContext);

  return (
   
    <div className='container-shipList'>
       <Navbar />
        {ships.map((ship, index) => (
          <Link to={`/ship/${index}`} key={index} className='ship-link'>
            <div className='container-ships'>
              <h5>{ship.name.toUpperCase()}</h5>
              <p>{ship.model}</p>
            </div>
          </Link>
        ))}

       {ships.length < 36 && ( // se mostrara el boton mientras la cantidad de naves del listado sea menor a 36.
       <button type="button" id='btn-view-more' onClick={loadMoreShips} class="btn btn-secondary">Ver Más...</button>
       )}

    </div>
  );
};

export default ShipsList;