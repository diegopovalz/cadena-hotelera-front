/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InvoiceContext from '../../context/InvoiceContext';
import ReservationService from '../../services/ReservationService';
import './ReservationForm.css';

export default function ReservationForm({ hotel }) {
  const { setInvoice } = useContext(InvoiceContext);
  const [clientIdType, setClientIdType] = useState('');
  const [clientId, setClientId] = useState('');
  const [reserveForDate, setReserveForDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [buttonText, setButtonText] = useState('Reservar');
  const [buttonEnabled, setEuttonEnabled] = useState(true);
  const [hotelId, setHotelId] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const { id } = params;
    setHotelId(id);
  }, []);

  const onReserveClick = async () => {
    setButtonText('Cargando...');
    setEuttonEnabled(false);
    const result = await ReservationService.createReservation({
      clientInfo: {
        documentType: clientIdType,
        documentNumber: clientId,
        name: clientName,
        lastName: clientLastName,
      },
      dateReserved: reserveForDate,
      hotelId,
    });
    setButtonText('Reservar');
    setEuttonEnabled(true);
    setInvoice({ result, hotel });
    navigate(`/invoice/${result.invoice.id}`);
  };

  const onClientIdTypeChange = (e) => {
    setClientIdType(e.target.value);
  };

  const onClientIdChange = (e) => {
    setClientId(e.target.value);
  };

  const onClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const onClientLastNameChange = (e) => {
    setClientLastName(e.target.value);
  };

  const onReserveForDateChange = (e) => {
    setReserveForDate(e.target.value);
  };

  return (
    <div className="reservation-modal">
      <h2>Reservar Habitación</h2>
      <div className="reservation-modal__inputs">
        <div>
          <label htmlFor="clientId">Tipo documento: </label>{' '}
          <input
            id="clientId"
            className="hotel__reserve-input"
            type="text"
            value={clientIdType}
            onChange={onClientIdTypeChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="clientId">Documento cliente: </label>{' '}
          <input
            id="clientId"
            className="hotel__reserve-input"
            type="text"
            value={clientId}
            onChange={onClientIdChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="clientName">Nombre cliente: </label>{' '}
          <input
            id="clientName"
            className="hotel__reserve-input"
            type="text"
            value={clientName}
            onChange={onClientNameChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="clientName">Apellido cliente: </label>{' '}
          <input
            id="clientName"
            className="hotel__reserve-input"
            type="text"
            value={clientLastName}
            onChange={onClientLastNameChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="clientName">Fecha a reservar: </label>{' '}
          <input
            id="reservationDate"
            className="hotel__reserve-input"
            type="text"
            placeholder="dd-MM-yyyy"
            value={reserveForDate}
            onChange={onReserveForDateChange}
            autoComplete="off"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="hotel__reserve-button"
          onClick={onReserveClick}
          disabled={!buttonEnabled}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
