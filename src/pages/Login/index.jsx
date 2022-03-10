import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import LoginService from '../../services/LoginService';
import UserContext from '../../context/UserContext';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const alert = useAlert();

  const handleLogin = async () => {
    const user = await LoginService.verifyLogin(username, password);
    if (user) {
      setUser(user);
      navigate('/');
    } else {
      alert.show(
        <div style={{ textTransform: 'none' }}>
          Usuario y contraseña incorrectos
        </div>
      );
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <div>
        <h1>Ingresa tu usuario y contraseña</h1>
      </div>
      <div className="login__inputs">
        <div>
          <input
            type="text"
            className="login__input"
            placeholder="Usuario"
            onChange={handleUsername}
          />
        </div>
        <div>
          <input
            type="password"
            className="login__input"
            placeholder="Contraseña"
            onChange={handlePassword}
          />
        </div>
      </div>
      <div>
        <button type="button" className="login__button" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}
