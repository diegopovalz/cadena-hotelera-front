import axios from 'axios';

const _ = [
  {
    id: '1',
    hotelName: 'Lleras Green Hotel',
    place: 'Poblado',
    costPerRoom: 100_000,
    dateReserved: '11-01-2020',
    roomImgUrl:
      'https://lh5.googleusercontent.com/proxy/j9P2nIQdrd3UB-W8KlQ5prWh_OPr7lcJFfuCofn7Gh4gCxtOz7XUHbLxweL04TrggA0fkT5RLGry4-ubXjOKrvpO_MDGq5Ukoaws19OvX1IIWiysulw6WQIWDlHiEL_H6dzTiUy13Z_Xc-uLXDrpwubTNndk6A=w253-h202-k-no',
  },
  {
    id: '2',
    hotelName: 'Hotel Lleras',
    place: 'Poblado',
    costPerRoom: 284_874,
    dateReserved: '11-02-2020',
    roomImgUrl:
      'https://lh3.googleusercontent.com/proxy/lKvfZtrQJtuhEa-bUwz9_SanyEvLHdG2X6H3QNcH3o6aBwOTRhhwphiEJv54Gpo8BJ--AB9Z1LKS9Shbsuxi-VUI30fCuMuUR0qIAVpKWdhzOYakiXPWnoPsBYL5i6sglpWVC9OLiRRqU8IQ9ag7VK_qJEKsUw=w296-h202-n-k-rw-no-v1',
  },
  {
    id: '3',
    hotelName: 'Hotel Central Plaza',
    place: 'Itagui',
    costPerRoom: 88_000,
    dateReserved: '11-03-2020',
    roomImgUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOY0xqxnvvP4AnQaR9Q-2UHABPG2PckvvtQFOFa=w253-h168-k-no',
  },
  {
    id: '4',
    hotelName: 'Hotel Monarca',
    place: 'Itagui',
    costPerRoom: 62_000,
    dateReserved: '11-04-2020',
    roomImgUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMbtpKA68i8huRYDVyvhmGjN5fRf7_8-M5WQQBS=w296-h202-n-k-rw-no-v1',
  },
];

async function getReservations(clientId) {
  const response = await axios.post('http://localhost:3001/reservations', {
    clientId: +clientId,
  });

  const { data } = response;
  return data;
}

async function getReservationById(id) {
  const response = await axios.get(`http://localhost:3001/reservations/${id}`);

  const { data } = response;
  return data;
}

async function createReservation(reservation) {
  const response = await axios.post(
    'http://localhost:3001/reservations/create',
    {
      reservation,
    }
  );

  const { data } = response;
  return data;
}

export default { getReservations, getReservationById, createReservation };
