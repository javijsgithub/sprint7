import React, { useState, useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StarWarsContext } from '../context/starWarsContext';
import '../styles/login.css';

const Login = () => {
  const { handleLogin } = useContext(StarWarsContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await handleLogin({ email, password });
      // Redireccionar a la página deseada después de iniciar sesión
      navigate('/list');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <Link to="/" className='btn btn-sm btn-outline-secondary' type="button" id='btn-home-login'>HOME</Link>
      <div className='container-form-log'>
      <h2>Inicia sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='input-email-log'
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='input-password-log'
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit" className="btn btn-secondary" id='btn-in-log'>Iniciar sesión</button>
      </form>
    </div>
     
    </div>
    
  );
};

export default Login;