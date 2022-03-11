import { Outlet } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import UserContext from './context/UserContext';
import LocationContext from './context/LocationContext';
import Header from './components/Header';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 2000,
  offset: '30px',
  transition: transitions.FADE,
};

function App() {
  const [user, setUser] = useLocalStorage('user', null);
  const [location, setLocation] = useLocalStorage('location', '');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <LocationContext.Provider value={{ location, setLocation }}>
        <Header />
        <AlertProvider template={AlertTemplate} {...options}>
          <div className="app">
            <Outlet />
          </div>
        </AlertProvider>
      </LocationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
