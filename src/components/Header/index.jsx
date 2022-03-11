import { Fragment, useContext, useRef } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './Header.css';

const ROUTES = [
  {
    id: 1,
    uri: '',
    linkName: 'Búsqueda',
    needsAuth: false,
  },
  {
    id: 2,
    uri: 'reservations',
    linkName: 'Mis Reservas',
    needsAuth: true,
  },
];

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const linksRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    linksRef.current.style.display = 'none';
    navigate('/');
  };

  const handleLogin = () => {
    linksRef.current.style.display = 'none';
    navigate('/login');
  };

  const handleHamburgerClick = () => {
    const currentStyle = linksRef.current.style.display;
    if (currentStyle === 'block') {
      linksRef.current.style.display = 'none';
    } else {
      linksRef.current.style.display = 'block';
    }
  };

  return (
    <>
      <header className="app-header--phone">
        <div className="app-header--phone__main">
          <div>
            <p className="app-name">
              Hotel<span>search</span>
            </p>
          </div>
          <div ref={linksRef} className="app-header--phone__links">
            {ROUTES.map(({ id, uri, linkName, needsAuth }) => {
              if (needsAuth && user === null) {
                return null;
              }
              return (
                <Fragment key={id}>
                  <div
                    onClick={() => {
                      linksRef.current.style.display = 'none';
                    }}
                    className="app-header--phone__link"
                  >
                    <Link
                      to={`/${uri}`}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? 'black' : 'white',
                        color: isActive ? 'white' : 'black',
                        padding: '10px',
                        borderRadius: '5px',
                        transition: 'all 0.1s ease-in',
                      })}
                    >
                      {linkName}
                    </Link>
                  </div>
                </Fragment>
              );
            })}
            <div className="app-header--phone__link">
              {user !== null ? (
                <p>
                  ¡Hola, {user.loginInfo.username}! Haz clic{' '}
                  <span onClick={handleLogout} className="logout-span">
                    aquí
                  </span>{' '}
                  para salir
                </p>
              ) : (
                <span onClick={handleLogin} className="login-span">
                  Entrar
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="app-header--phone__icon">
          <span>
            <i onClick={handleHamburgerClick} className="fa fa-bars" />
          </span>
        </div>
      </header>
      <header className="app-header">
        <div className="app-header__main">
          <div>
            <p className="app-name">
              Hotel<span>search</span>
            </p>
          </div>
          <div className="app-header__links">
            {ROUTES.map(({ id, uri, linkName, needsAuth }) => {
              if (needsAuth && user === null) {
                return null;
              }
              return (
                <Fragment key={id}>
                  <div>
                    <Link
                      to={`/${uri}`}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? 'black' : 'white',
                        color: isActive ? 'white' : 'black',
                        padding: '10px',
                        borderRadius: '5px',
                        transition: 'all 0.1s ease-in',
                      })}
                    >
                      {linkName}
                    </Link>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div>
          {user !== null ? (
            <p>
              ¡Hola, {user.loginInfo.username}! Haz clic{' '}
              <span onClick={handleLogout} className="logout-span">
                aquí
              </span>{' '}
              para salir
            </p>
          ) : (
            <span onClick={handleLogin} className="login-span">
              Entrar
            </span>
          )}
        </div>
      </header>
    </>
  );
}
