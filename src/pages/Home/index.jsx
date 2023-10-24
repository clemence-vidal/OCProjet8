import Banner from "../../components/Banner";
import Card from "../../components/Card";
import styled from "styled-components";

const StyledCards = styled.div`
  @media (min-width: 768px) {
    width: auto;
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 80px;
    justify-content: space-evenly;
  }
`

function Home() {
    return (
        <div>
        <Banner />
        <StyledCards>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> 
        </StyledCards>
      </div>
    )
}

export default Home;
