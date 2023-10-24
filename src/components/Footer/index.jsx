import styled from "styled-components"
import logo from "../../assets/logo.svg"

const StyledFooter = styled.div`
    background-color: black;
    height: 209px;
    margin: 0;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & img {
        width: 122px;
        height: 39.444px;
        filter: grayscale(100%) brightness(200%);
    }
    & p {
        font-family: Montserrat, sans-serif;
        color: white;
        font-size: 12px;
        width: 90px;
        text-align: center;
        margin-top: 10px;
        line-height: 142.6%;
    }

    @media (min-width: 768px) {
        margin: 0;
        margin-top: 40px;
        width: 100%;
        & p {            
            font-size: 24px; 
            width: 100%;
            top: 30px;
            position: relative;
        }
        
    }
`

function Footer() {
    return (
        <StyledFooter>
            <img src={logo} alt="logo-site" />
            <p>© 2020 Kasa. All rights reserved</p>
        </StyledFooter>
    )
}

export default Footer