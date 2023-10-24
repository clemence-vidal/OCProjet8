import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "../../assets/logo.svg";
// import "./styles.scss"
// import "./style.css"

// const StyledLink = styled(Link);
const StyledImage = styled.img`
    width: 125px;
    height: 40px;    
    margin: 20px; 

    @media (min-width: 768px) {
        width: 210px;
        height: 68px;
    }
`
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    @media (min-width: 768px) { 
    margin: 30px 65px;
    }
`
const StyledLink = styled(Link)`
    color: #FF6060;    
    text-transform: uppercase;

    ${props =>
    props.styleOne && 
    css`
        text-decoration: none;
    `}

    ${props =>
    props.styleTwo && 
    css`
        text-decoration: none;
        margin-left: 10px;
        margin-right: 20px;
    `}

    @media (min-width: 768px) {
        text-transform: none;
        font-size: 24px;

        ${props =>
        props.styleTwo && 
        css`
            margin-left: 50px;
    `}
    }
`;


function Header() {
    return (
        <StyledNav>
            <div>
                <StyledImage src={logo} alt="logo-site" />
            </div>
            <div>
                <StyledLink to="/home" styleOne>Accueil</StyledLink>
                <StyledLink to="/about" styleTwo>A Propos</StyledLink>
            </div>
        </StyledNav>
    )
}

export default Header