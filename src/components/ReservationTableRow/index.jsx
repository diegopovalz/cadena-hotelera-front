export default function ReservationTableRow({
  hotelName,
  location,
  dateReserved,
  onClick,
}) {
  return (
    <tr onClick={onClick}>
      <td>{hotelName}</td>
      <td>{location}</td>
      <td>{dateReserved}</td>
    </tr>
  );
}
