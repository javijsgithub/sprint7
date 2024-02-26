import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarWarsContextProvider from './context/starWarsContext';
import ShipsList from './components/shipList';
import ShipDetails from './components/shipDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarWarsContextProvider>
        <Router>
          <Routes>
          <Route path="/" element={<ShipsList />} />
            <Route path="/ship/:id" element={<ShipDetails />} />
          </Routes>
        </Router>
      </StarWarsContextProvider>
    </div>
  );
}

export default App;
