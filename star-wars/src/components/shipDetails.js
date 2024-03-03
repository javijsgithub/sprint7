import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import { useParams } from 'react-router-dom';
import Navbar from './navBar';
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
      <Navbar />
        <h6>SHIPS:</h6>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5">
              <img src={ship.image} className="img-fluid rounded-start" alt={ship.name} style={{ borderRight: "1px solid #778899" }} />
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

          <h6>PILOTS:</h6>
          <div className="row">
            {ship.pilots && ship.pilots.map((pilot, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card">
                  <img src={pilot.image} className="card-img-top" alt={pilot.name} style={{ borderBottom: "2px solid #778899" }} />
                  <div className="card-body">
                    <h5 className="card-title">{pilot.name}</h5>
                  </div>
                </div>
              </div>
            ))}
            {ship.pilots.length === 0 && <p>No hay pilotos disponibles</p>}
          </div>

          <h6>FILMS:</h6>
          <div className="row">
            {ship.films && ship.films.map((film, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card">
                  <img src={film.image} className="card-img-top" alt={film.name} style={{ borderBottom: "2px solid #778899" }} />
                  <div className="card-body">
                    <h5 className="card-title">{film.title}</h5>
                    <p className="card-text">Episode: {film.episode_id}</p>
                    <p className="card-text">Director: {film.director}</p>
                    <p className="card-text">Producer: {film.producer}</p>
                    <p className="card-text">Release Date: {film.release_date}</p>
                  </div>
                </div>
              </div>
            ))}
            {ship.films.length === 0 && <p>No hay películas disponibles</p>}
          </div>
    </div>
  );
};

export default ShipDetails;