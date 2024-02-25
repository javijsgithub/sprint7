import React from 'react';
import StarWarsContextProvider from './context/starWarsContext';
import ShipsList from './components/shipList';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarWarsContextProvider>
        <ShipsList />
      </StarWarsContextProvider>
    </div>
  );
}

export default App;
