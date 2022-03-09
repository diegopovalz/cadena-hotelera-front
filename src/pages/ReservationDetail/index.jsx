import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthRequiredComponent from '../../components/AuthRequiredComponent';
import ReservationService from '../../services/ReservationService';
import NotFound from '../NotFound';
import './ReservationDetail.css';

export default function ReservationDetail() {
  const [reservation, setReservation] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getResult = () => {
      const { id } = params;
      const result = ReservationService.getReservationById(id);
      setReservation(result);
    };

    getResult();
  }, []);

  if (reservation) {
    return (
      <AuthRequiredComponent>
        <div className="reservation">
          <div>
            <img
              className="reservation__img"
              src={reservation.roomImgUrl}
              alt="Room"
            />
          </div>
          <div className="reservation__info">
            <div className="reservation__info-title">
              <h3>{reservation.hotelName}</h3>
              <h4>Ubicación: {reservation.place}</h4>
            </div>
            <div className="reservation__info-date">
              <p>
                Fecha reservado: <span>{reservation.dateReserved}</span>
              </p>
            </div>
          </div>
        </div>
      </AuthRequiredComponent>
    );
  }
  return (
    <AuthRequiredComponent>
      <NotFound />
    </AuthRequiredComponent>
  );
}
