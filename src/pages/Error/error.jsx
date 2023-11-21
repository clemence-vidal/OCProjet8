import { Link } from 'react-router-dom';
import './error.scss';

function Error() {
  return (
    <div className="error-page main-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div>
        <Link to="/home">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}

export default Error;
