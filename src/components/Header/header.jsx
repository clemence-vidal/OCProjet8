import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./header.scss";

function Header() {
    return (
        <nav className="header">
            <div>
                <img src={logo} alt="logo-site" />
            </div>
            <div>
                <Link to="/home" className="style-one" >Accueil</Link>
                <Link to="/about" className="style-two">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header