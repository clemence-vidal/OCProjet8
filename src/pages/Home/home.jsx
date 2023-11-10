import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import { Link } from "react-router-dom";
import "./home.scss";
import { LogementsServices } from "../../services/logementsServices";
import banner from "../../assets/banner-home.png";

function Home() {
  const [housingList, setHousingList] = useState([]);

  useEffect(() => {
    const logementsServices = new LogementsServices();
    logementsServices.getAllLogements()
    .then((json) => {
      setHousingList(json);
    })
  }, []);

    return (
      <div>
        <Banner imagePath={banner} showParagraph={true} />
        <div className="home-page">          
          {housingList.map((card) => (
            <Link to={{ pathname: `/housing/${card.id}`, state: { data: card } }} key={card.id}>
              <Card id={card.id} key={card.id} title={card.title} cover={card.cover} data={card} />
            </Link>
          ))}
        </div>
      </div>
    )
}

export default Home;
