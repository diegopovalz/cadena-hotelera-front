import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import HotelService from '../../services/HotelService';
import './HotelDetail.css';

export default function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getResult = async () => {
      const { id } = params;
      const { hotel: result } = await HotelService.getHotelById(id);
      setHotel(result);
    };

    getResult();
  }, []);

  const onReserveClick = (id) => {
    navigate(`/hotel/${id}/reserve`);
  };

  if (hotel) {
    return (
      <div>
        <Helmet>
          <title>{`Información Hotel ${hotel.hotelName}`}</title>
        </Helmet>
        <div className="hotel">
          <div>
            <img className="hotel__img" src={hotel.roomImgUrl} alt="Room" />
          </div>
          <div className="hotel__info">
            <div className="hotel__info-title">
              <h3>{hotel.hotelName}</h3>
              <h4>
                Ubicación: <span className="text-light">{hotel.place}</span>
              </h4>
              <h4>
                Precio habitación:{' '}
                <span className="text-light">{hotel.costPerRoom}</span>
              </h4>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="hotel__reserve-button"
              onClick={() => onReserveClick(hotel.id)}
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Cargando...</h1>
    </div>
  );
}
