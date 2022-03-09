import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthRequiredComponent from '../../components/AuthRequiredComponent';
import ReservationTable from '../../components/ReservationTable';
import ReservationTableRow from '../../components/ReservationTableRow';
import ReservationService from '../../services/ReservationService';

export default function MyReservations() {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getReservations = () => {
      const results = ReservationService.getReservations();
      setReservations(results);
    };
    getReservations();
  }, []);

  const onItemClick = (id) => {
    navigate(`/reservations/${id}`);
  };

  return (
    <AuthRequiredComponent>
      <div>
        {reservations.length > 0 && (
          <ReservationTable>
            {reservations.map(({ id, hotelName, place, dateReserved }) => (
              <Fragment key={id}>
                <ReservationTableRow
                  hotelName={hotelName}
                  location={place}
                  dateReserved={dateReserved}
                  onClick={() => onItemClick(id)}
                />
              </Fragment>
            ))}
          </ReservationTable>
        )}
      </div>
    </AuthRequiredComponent>
  );
}
