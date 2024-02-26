import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import { Link } from 'react-router-dom';
import '../styles/shipList.css';

const ShipsList = () => {
  const { ships } = useContext(StarWarsContext);

  return (
    <div className='container-shipList'>
        {ships.map((ship, index) => (
          <Link to={`/ship/${index}`} key={index} className='ship-link'>
            <div className='container-ships'>
              <h5>{ship.name.toUpperCase()}</h5>
              <p>{ship.model}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ShipsList;