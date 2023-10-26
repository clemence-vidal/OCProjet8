import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
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
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("datas/logements.json")
    .then((response) => {
      if (!response.ok) {
        console.log("Quelque chose s'est mal passé");
      }
      return response.json();
    })
    .then((jsonData) => {
      setCardData(jsonData);
    })
    .catch((error) => {
      console.log("Erreur", error);
    });
  }, []);
  console.log("cardData:", cardData);

    return (
      <div>
        <Banner />
        <StyledCards>
          {cardData.map((card) => (
            <Card key={card.id} title={card.title} image={card.cover} />
          ))}
        </StyledCards>
      </div>
    )
}

export default Home;
