import { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthRequiredComponent from '../../components/AuthRequiredComponent';
import ReservationTable from '../../components/ReservationTable';
import ReservationTableRow from '../../components/ReservationTableRow';
import UserContext from '../../context/UserContext';
import ReservationService from '../../services/ReservationService';

export default function MyReservations() {
  const [reservations, setReservations] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getReservations = async () => {
      const results = await ReservationService.getReservations(
        user.clientInfo.id
      );
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
            {reservations.map(
              ({
                reservation: { id, dateReserved },
                hotelInfo: { hotelName, place },
              }) => (
                <Fragment key={id}>
                  <ReservationTableRow
                    hotelName={hotelName}
                    location={place}
                    dateReserved={dateReserved}
                    onClick={() => onItemClick(id)}
                  />
                </Fragment>
              )
            )}
          </ReservationTable>
        )}
      </div>
    </AuthRequiredComponent>
  );
}
