import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './header.scss';

function Header() {
  const location = useLocation();
  const accueil = location.pathname === '/home';
  const aPropos = location.pathname === '/about';

  return (
    <nav className="header">
      <div>
        <img src={logo} alt="logo-site" />
      </div>
      <div>
        <Link
          to="/home"
          className="style-one"
          style={{ textDecoration: accueil ? 'underline' : 'none' }}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className="style-two"
          style={{ textDecoration: aPropos ? 'underline' : 'none' }}
        >
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
