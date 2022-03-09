import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './context/UserContext';
import LocationContext from './context/LocationContext';
import Header from './components/Header';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <LocationContext.Provider value={{ location, setLocation }}>
        <Header />
        <div className="app">
          <Outlet />
        </div>
      </LocationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
