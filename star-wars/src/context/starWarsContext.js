import React, { createContext, useState, useEffect } from 'react';

export const StarWarsContext = createContext();

const StarWarsContextProvider = (props) => {
  const [ships, setShips] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch('https://swapi.py4e.com/api/starships/');
        if (!response.ok) {
          throw new Error('Failed to fetch starships');
        }
        const data = await response.json();
          setNextPage(data.next); 
            const shipsWithData = await Promise.all(data.results.map(async (ship) => {
            const shipId = ship.url.match(/\/(\d+)\/$/)[1];
            const shipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;
            const shipData = await (await fetch(ship.url)).json();
            return { ...shipData, image: shipImageUrl };
          }));
          setShips(shipsWithData);
        }   catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchShips();
  }, []);

  useEffect(() => {
    const fetchPilotsForShips = async () => {
      try {
        const shipsWithPilots = await Promise.all(ships.map(async (ship) => {
          const pilotsData = await Promise.all(ship.pilots.map(async (pilotUrl) => {
            const pilotResponse = await fetch(pilotUrl);
            const pilotData = await pilotResponse.json();
            const pilotId = pilotUrl.match(/\/(\d+)\/$/)[1];
            const pilotImageUrl = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;
            return { ...pilotData, image: pilotImageUrl };
          }));
          return { ...ship, pilots: pilotsData };
        }));
        
        // Actualizar el estado con los pilotos de las naves
        setShips(shipsWithPilots);
      } catch (error) {
        console.error('Error fetching pilots:', error);
      }
    };
  
    fetchPilotsForShips();
  }, [ships]);

  useEffect(() => {
    const fetchFilmsForShips = async () => {
      try {
        const shipsWithFilms = await Promise.all(ships.map(async (ship) => {
          const filmsData = await Promise.all(ship.films.map(async (filmUrl) => {
            const filmResponse = await fetch(filmUrl);
            const filmData = await filmResponse.json();
            const filmId = filmUrl.match(/\/(\d+)\/$/)[1];
            const filmImageUrl = `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`;
            return { ...filmData, image: filmImageUrl };
          }));
          return { ...ship, films: filmsData };
        }));
  
        // Actualiza el estado con la información de las películas de las naves
        setShips(shipsWithFilms);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };
  
    fetchFilmsForShips();
  }, [ships]);

  const handleRegister = async (userData) => {
    try {
      const checkEmailResponse = await fetch(`https://reqres.in/api/users?email=${userData.email}`);
      const checkEmailData = await checkEmailResponse.json();
      if (checkEmailData.data.length > 0) {
        throw new Error('El correo electrónico ya está registrado');
      }

      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        setLoggedIn(true);
        console.log('Usuario registrado exitosamente:', data);
      } else {
        console.error('Error registrando usuario:', data.error);
      }
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const handleLogin = async (userData) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data); 
        setLoggedIn(true);
        console.log('Inicio de sesión exitoso:', data);
       // fetchUserData(userData.email);

      } else {
        console.error('Error iniciando sesión:', data.error);
      }
    } catch (error) {
      console.error('Error iniciando sesión:', error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };


  const loadMoreShips = async () => {
    if (nextPage) {
      try {
        const response = await fetch(nextPage);
        if (!response.ok) {
          throw new Error('Failed to fetch more starships');
        }
        const data = await response.json();
        setNextPage(data.next); // Actualiza la URL de la próxima página
        const newShipsData = await Promise.all(data.results.map(async (ship) => {
          const shipId = ship.url.match(/\/(\d+)\/$/)[1];
          const shipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;
          const shipData = await (await fetch(ship.url)).json();
          return { ...shipData, image: shipImageUrl };
        }));
        setShips([...ships, ...newShipsData]); // Agrega las nuevas naves
      } catch (error) {
        console.error('Error fetching more starships:', error);
      }
    }
  };

  /*const fetchUserData = async (email) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los datos del usuario');
      }
  
      const data = await response.json();
  
      
      if (data.data && data.data.length > 0) {
        const userData = data.data.map(user => user.email === email); // Busca el usuario por correo electrónico
        setUser(userData); 
      } else {
        console.error('No se encontraron datos de usuario en la respuesta');
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };
  useEffect(() => {
    if (loggedIn) { 
      fetchUserData();
    }
  }, [loggedIn]);*/


  return (
    <StarWarsContext.Provider value={{ 
      user,
      ships, 
      nextPage, 
      loggedIn,
      handleRegister, 
      handleLogin, 
      handleLogout,
      loadMoreShips,
      //fetchUserData
       }}
    >
      {props.children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsContextProvider;