import DropdownMenu from '../../components/DropdownMenu/dropdownmenu';
import './housing.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LogementsServices } from '../../services/logementsServices';
import Carousel from '../../components/carousel/carousel';
import Error from '../Error/error';
import Rating from '../../components/Rating/rating';
import User from '../../components/User/user';

function Housing() {
  const [housingDetails, setHousingDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const logementsServices = new LogementsServices();
    logementsServices.getLogementsById(id).then((json) => {
      setHousingDetails(json);
    });
  }, [id]);

  return (
    <div className="housing">
      {housingDetails ? (
        <div>
          <div className="img-housing">
            <Carousel images={housingDetails.pictures} />
          </div>
          <div className="housing-content">
            <h1>{housingDetails.title}</h1>
            <p>{housingDetails.location}</p>
            <div className="filters">
              {housingDetails.tags.map((filters) => (
                <p className="p-filters">{filters}</p>
              ))}
            </div>
            <div className="rating-and-name">
              <div className="rating">
                <Rating rating={housingDetails.rating} />
              </div>
              <User
                name={housingDetails.host.name}
                picture={housingDetails.host.picture}
              />
            </div>
          </div>
          <div className="dropdown-housing">
            <DropdownMenu
              title="Description"
              content={housingDetails.description}
            ></DropdownMenu>
            <DropdownMenu
              title="Équipements"
              content={housingDetails.equipments.map((equip) => (
                <ul>
                  <li>{equip}</li>
                </ul>
              ))}
            ></DropdownMenu>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Housing;
