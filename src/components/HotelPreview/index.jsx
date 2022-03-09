import './HotelPreview.css';

export default function HotelPreview({
  hotelName,
  location,
  price,
  roomImg,
  roomsAvailable,
}) {
  return (
    <div className="hotel-preview">
      <div>
        <img className="hotel-preview__img" src={roomImg} alt="Room" />
      </div>
      <div className="hotel-preview__info">
        <div>
          <h3>{hotelName}</h3>
          <h5>{location}</h5>
        </div>
        <div>
          <p className="hotel-preview__info--price">
            Precio de la habitación por noche: ${price.toLocaleString('es')}
          </p>
          <p>Habitaciones disponibles: {roomsAvailable}</p>
        </div>
      </div>
    </div>
  );
}
