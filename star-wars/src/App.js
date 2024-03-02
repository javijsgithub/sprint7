import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StarWarsContextProvider, { StarWarsContext } from './context/starWarsContext';
import ShipsList from './components/shipList';
import ShipDetails from './components/shipDetails';
import WelcomeScreen from './components/welcomeScreen';
import Login from './components/login';
import Register from './components/register';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarWarsContextProvider>
        <Router>
          <Routes>
            <Route path="/list" element={<ProtectedRoute component={<ShipsList />} />} /> 
            <Route path="/ship/:id" element={<ProtectedRoute component={<ShipDetails />} />} />
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </StarWarsContextProvider>
    </div>
  );
}

function ProtectedRoute({ component }) {
  const { loggedIn } = useContext(StarWarsContext);
  return loggedIn ? component : <Navigate to="/login" />;
}

export default App;
