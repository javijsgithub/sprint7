import React, { createContext, useState, useEffect } from 'react';

export const StarWarsContext = createContext();

const StarWarsContextProvider = (props) => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch('https://swapi.py4e.com/api/starships/');
        if (!response.ok) {
          throw new Error('Failed to fetch starships');
        }
        const data = await response.json();
        const shipsWithData = await Promise.all(data.results.map(async (ship) => {
            const shipId = ship.url.match(/\/(\d+)\/$/)[1];
            const shipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;
            const shipData = await (await fetch(ship.url)).json();
            return { ...shipData, image: shipImageUrl };
          }));
          setShips(shipsWithData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchShips();
  }, []);

  return (
    <StarWarsContext.Provider value={{ ships }}>
      {props.children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsContextProvider;