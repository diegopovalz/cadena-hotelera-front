import './ReservationTable.css';

export default function ReservationTable({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Hotel</th>
          <th>Lugar</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
