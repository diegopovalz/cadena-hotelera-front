import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import InvoiceContext from './context/InvoiceContext';
import LocationContext from './context/LocationContext';
import UserContext from './context/UserContext';
import Header from './components/Header';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.FADE,
};

function App() {
  const [user, setUser] = useLocalStorage('user', null);
  const [location, setLocation] = useLocalStorage('location', '');
  const [invoice, setInvoice] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <LocationContext.Provider value={{ location, setLocation }}>
        <InvoiceContext.Provider value={{ invoice, setInvoice }}>
          <Header />
          <AlertProvider template={AlertTemplate} {...options}>
            <div className="app">
              <Outlet />
            </div>
          </AlertProvider>
        </InvoiceContext.Provider>
      </LocationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
