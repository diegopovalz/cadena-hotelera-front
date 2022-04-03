import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import InvoiceContext from '../../context/InvoiceContext';
import './InvoiceDetail.css';

export default function InvoiceDetail() {
  const { invoice: details } = useContext(InvoiceContext);
  const navigate = useNavigate();

  return (
    <div className="invoice-info">
      <div className="invoice-detail">
        <div>
          <h1>
            ¡Felicidades, acabas de reservar una habitación en el hotel{' '}
            {details.hotel.hotelName}!
          </h1>
        </div>
        <div>
          <img src={details.hotel.roomImgUrl} alt="Hotel room" />
        </div>
        <div>
          <p className="text-light">
            La reserva quedó guardada para la fecha{' '}
            <span className="text-bold">
              {details.result.savedReservation.dateReserved}
            </span>
          </p>
        </div>
        <div>
          <h4>Te estaremos esperando :)</h4>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="invoice-detail__button"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
