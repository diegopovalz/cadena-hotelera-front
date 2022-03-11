import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import AuthRequiredComponent from '../../components/AuthRequiredComponent';
import ReservationService from '../../services/ReservationService';
import NotFound from '../NotFound';
import './ReservationDetail.css';

export default function ReservationDetail() {
  const [reservation, setReservation] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getResult = async () => {
      const { id } = params;
      const result = await ReservationService.getReservationById(id);
      setReservation(result);
    };

    getResult();
  }, []);

  if (reservation) {
    return (
      <AuthRequiredComponent>
        <Helmet>
          <title>Reserva - {reservation.hotelInfo.hotelName}</title>
        </Helmet>
        <div className="reservation">
          <div>
            <img
              className="reservation__img"
              src={reservation.hotelInfo.roomImgUrl}
              alt="Room"
            />
          </div>
          <div className="reservation__info">
            <div className="reservation__info-title">
              <h3>{reservation.hotelInfo.hotelName}</h3>
              <h4>Ubicación: {reservation.hotelInfo.place}</h4>
            </div>
            <div className="reservation__info-date">
              <p>
                Fecha reservado:{' '}
                <span>{reservation.reservation.dateReserved}</span>
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
