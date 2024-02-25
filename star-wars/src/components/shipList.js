import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import '../styles/shipList.css';

const ShipsList = () => {
  const { ships } = useContext(StarWarsContext);

  return (
    <div className='container-shipList'>
        {ships.map((ship, index) => (
          <div className='container-ships' key={index}>
            <h5>{ship.name.toUpperCase()}</h5>
            <p>{ship.model}</p>
          </div>
        ))}
    </div>
  );
};

export default ShipsList;