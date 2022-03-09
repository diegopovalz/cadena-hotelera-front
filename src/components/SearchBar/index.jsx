import './SearchBar.css';

export default function SearchBar({ value, onKeyDown, onClick, onChange }) {
  return (
    <div className="search-bar">
      <div className="search-bar__title">
        <h1>¡Busca hoteles, donde los necesites!</h1>
        <h3>¡Simplemente ingresa una ubicación, y busca!</h3>
      </div>
      <div className="search-bar-container">
        <input
          className="search-bar__input"
          type="text"
          value={value}
          onKeyDown={onKeyDown}
          onChange={onChange}
        />
        <button type="button" className="search-bar__button" onClick={onClick}>
          ¡Adelante!
        </button>
      </div>
    </div>
  );
}
