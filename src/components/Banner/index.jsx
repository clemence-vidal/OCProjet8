import banner from "../../assets/banner.png"
import styled from "styled-components";

// const StyledImage = styled.img`
//     object-fit: cover;
// `
const StyledDiv = styled.div`
    width: auto;
    margin: 20px;
    margin-top: 0%;
    height: 111px;
    position: relative;

    @media (min-width: 768px) {
        margin: 0 80px 125px 80px;
        display: flex;
        justify-content: center;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        border-radius: 10px;     
        filter: brightness(0.7);

        @media (min-width: 768px) {
            height: 200px;
        }
    }
    & p {
        position: absolute;
        width: 220px;
        color: #FFF;
        font-family: Montserrat, sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        padding-top: 30px;
        padding-left: 20px;

        @media (min-width: 768px) {
            font-size: 48px;
            width: auto;
            padding-top: 70px;
        }
    }
`

function Banner() {
    return (
        <StyledDiv>
            <img src={banner} alt="" />
            <p>Chez vous, partout et ailleurs</p>
        </StyledDiv>
    )
}

export default Banner;