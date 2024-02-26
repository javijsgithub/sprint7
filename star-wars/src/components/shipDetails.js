import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import { useParams } from 'react-router-dom';
import '../styles/shipDetails.css';

const ShipDetails = () => {
  const { ships } = useContext(StarWarsContext);
  const { id } = useParams();
  

  // Encuentra la nave por su id
  const ship = ships[id];
  
  if (!ship) {
    return <div>Nave no encontrada</div>;
  }

  return (
    <div className='container-shipDetails'>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={ship.image} className="img-fluid rounded-start" alt={ship.name} />
          </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{ship.name.toUpperCase()}</h5>
                <p className="card-text">Modelo:  {ship.model}</p>
                <p className="card-text">Precio en creditos: {ship.cost_in_credits}</p>
                <p className="card-text">Velocidad atmosférica: {ship.max_atmosphering_speed}</p>
                <p className="card-text">Fabricante: {ship.manufacturer}</p>
                <p className="card-text">Longitud: {ship.length}</p>
                <p className="card-text">Tripulación: {ship.crew}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShipDetails;