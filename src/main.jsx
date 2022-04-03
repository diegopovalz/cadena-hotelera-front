import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import HotelSearch from './pages/HotelSearch';
import MyReservations from './pages/MyReservations';
import ReservationDetail from './pages/ReservationDetail';
import Login from './pages/Login';
import HotelDetail from './pages/HotelDetail';
import InvoiceDetail from './pages/InvoiceDetail';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HotelSearch />} />
            <Route path="/hotel/:id" element={<HotelDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reservations" element={<MyReservations />} />
            <Route path="/reservations/:id" element={<ReservationDetail />} />
            <Route path="/invoice/:id" element={<InvoiceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
