import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import HotelService from '../../services/HotelService';
import ReservationForm from '../ReservationForm';
import './HotelDetail.css';

const modalStyles = {
  content: {
    width: '500px',
    height: '400px',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function HotelDetail() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hotel, setHotel] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getResult = async () => {
      const { id } = params;
      const { hotel: result } = await HotelService.getHotelById(id);
      setHotel(result);
    };

    getResult();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (hotel) {
    return (
      <>
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
                onClick={openModal}
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Reservation Modal"
        >
          <ReservationForm hotel={hotel} />
        </Modal>
      </>
    );
  }
  return (
    <div>
      <h1>Cargando...</h1>
    </div>
  );
}
