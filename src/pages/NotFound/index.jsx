import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada</title>
      </Helmet>
      <div className="not-found">
        <div>
          <h1>¡Ups! Parece que esta página no existe.</h1>
        </div>
        <div>
          <button
            type="button"
            className="go-back-button"
            onClick={() => navigate('/')}
          >
            Volver al menú principal
          </button>
        </div>
      </div>
    </>
  );
}
