const HOTELS = [
  {
    id: 1,
    hotelName: 'Lleras Green Hotel',
    place: 'Poblado',
    costPerRoom: 100_000,
    roomsAvailable: 3,
    roomImgUrl:
      'https://lh5.googleusercontent.com/proxy/j9P2nIQdrd3UB-W8KlQ5prWh_OPr7lcJFfuCofn7Gh4gCxtOz7XUHbLxweL04TrggA0fkT5RLGry4-ubXjOKrvpO_MDGq5Ukoaws19OvX1IIWiysulw6WQIWDlHiEL_H6dzTiUy13Z_Xc-uLXDrpwubTNndk6A=w253-h202-k-no',
  },
  {
    id: 2,
    hotelName: 'Hotel Lleras',
    place: 'Poblado',
    costPerRoom: 284_874,
    roomsAvailable: 10,
    roomImgUrl:
      'https://lh3.googleusercontent.com/proxy/lKvfZtrQJtuhEa-bUwz9_SanyEvLHdG2X6H3QNcH3o6aBwOTRhhwphiEJv54Gpo8BJ--AB9Z1LKS9Shbsuxi-VUI30fCuMuUR0qIAVpKWdhzOYakiXPWnoPsBYL5i6sglpWVC9OLiRRqU8IQ9ag7VK_qJEKsUw=w296-h202-n-k-rw-no-v1',
  },
  {
    id: 3,
    hotelName: 'Hotel Central Plaza',
    place: 'Itagui',
    costPerRoom: 88_000,
    roomsAvailable: 2,
    roomImgUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOY0xqxnvvP4AnQaR9Q-2UHABPG2PckvvtQFOFa=w253-h168-k-no',
  },
  {
    id: 4,
    hotelName: 'Hotel Monarca',
    place: 'Itagui',
    costPerRoom: 62_000,
    roomsAvailable: 0,
    roomImgUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMbtpKA68i8huRYDVyvhmGjN5fRf7_8-M5WQQBS=w296-h202-n-k-rw-no-v1',
  },
  {
    id: 5,
    hotelName: 'Hotel Portal Central',
    place: 'Itagui',
    costPerRoom: 82_000,
    roomsAvailable: 1,
    roomImgUrl:
      'https://lh5.googleusercontent.com/p/AF1QipNTsZGYIvpuH4g09jkijqH3YBkP2sGe9DTgUmJn=w253-h189-k-no',
  },
  {
    id: 6,
    hotelName: 'Campo Valdes Park Hostel',
    place: 'Campo Valdes',
    costPerRoom: 47_700,
    roomsAvailable: 5,
    roomImgUrl:
      'https://lh5.googleusercontent.com/p/AF1QipNTsZGYIvpuH4g09jkijqH3YBkP2sGe9DTgUmJn=w253-h189-k-no',
  },
];

function getHotelsByName(location) {
  return HOTELS.filter(
    (hotel) =>
      hotel.place.toLowerCase().includes(location.toLowerCase()) &&
      hotel.roomsAvailable > 0
  );
}

export default { getHotelsByName };
