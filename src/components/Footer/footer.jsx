import logo from "../../assets/logo.svg"
import "./footer.scss"



function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="logo-site" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer