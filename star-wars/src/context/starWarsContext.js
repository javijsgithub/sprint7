import React, { createContext, useState, useEffect } from 'react';

export const StarWarsContext = createContext();

const StarWarsContextProvider = (props) => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        if (!response.ok) {
          throw new Error('Failed to fetch starships');
        }
        const data = await response.json();
        setShips(data.results);
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