import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StarWarsContext } from '../context/starWarsContext';
import '../styles/register.css';

const Register = () => {
  const { handleRegister } = useContext(StarWarsContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
            
    // Registro del nuevo usuario
    await handleRegister({ userData });
    // Redireccionar a la página deseada después de registrarse para ya poder hacer login
    navigate('/login');

      
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('Hubo un error al registrar al usuario');
    }
    
  };

  return (
    <div className='container-fluid' id='container-signup'>
      <Link to="/" className='btn btn-sm btn-outline-secondary' type="button" id='btn-home-register'>HOME</Link>
      <div className='container-form-sign'>
        <h2>Sign up</h2>
          {error && <div className="error-message">{error}</div>} {/* Mostrar mensaje de error */}
          <form onSubmit={handleSubmit}>
            <input
              className='input-email-sign'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='input-password-sign'
              type="password"
              placeholder="Password"
             value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button type="submit" className="btn btn-secondary" id='btn-in-sign'>Sign up</button>
          </form>
      </div>
    </div>
    
  );
};

export default Register;