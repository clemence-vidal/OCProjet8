import styled from "styled-components";
import { Link } from 'react-router-dom';


const StyledErrorPage = styled.div`
    font-family: Montserrat, sans-serif;  
    & h1 {
        color: #FF6060;
        text-align: center;
        font-family: Montserrat, sans-serif;
        font-size: 96px;
        margin: 100px 0;
    }  
    & p {
        margin: 0 50px;
        color: #FF6060;
        text-align: center;
        font-family: Montserrat, sans-serif;
        font-size: 18px;
    }
    & div {
        margin: 100px 0;
        font-size: 14px;
        text-align: center;
        & a {
            color: #FF6060;           
        }
    }
    @media (min-width: 768px) {
        & h1 {
            font-size: 288px;
        }
        & p {            
            font-size: 36px;
        }
        & div {
        font-size: 18px;
        }        
    }
`

function Error() {
    return (
        <StyledErrorPage>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div>
                <Link to="/home">Retourner sur la page d'accueil</Link>
            </div>
        </StyledErrorPage>
    )
}

export default Error;