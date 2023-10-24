import styled from "styled-components";

const StyledCard = styled.div`
    margin: 20px;
    background: linear-gradient(180deg, #FF6060, #852222);
    border-radius: 10px;
    width: auto;
    height: 220px;
    color: white;
    display: flex;
    align-items: flex-end;
    padding-left: 15px;
    padding-bottom: 15px;   

    @media (min-width: 768px) {
        width: 340px;
        height: 340px;
        flex-wrap: wrap;
    }
`

function Card() {
    return (
        <StyledCard>
            <img src="" alt="" />
            <p>Titre de la<br/> location</p>
        </StyledCard>
    )
}

export default Card;