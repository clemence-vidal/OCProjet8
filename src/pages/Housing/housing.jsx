import DropdownMenu from "../../components/DropdownMenu/dropdownmenu";
import "./housing.scss";
// import backHousing from "../../assets/back-housing.jpg"
// import { useLocation } from "react-router-dom";
import { useCards } from "../Home/home";
import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { LogementsServices } from "../../services/logementsServices";
import Carousel from "../../components/carousel/carousel";

function Housing() {
    const [housingDetails, setHousingDetails] = useState();
    const { id } = useParams();

    useEffect(() => {
        const logementsServices = new LogementsServices();
        logementsServices.getLogementsById(id) 
        .then((json) => {
            setHousingDetails(json);
        })        
      }, [id]);
      
      function ratingHousing(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} className={i < rating ? "" : "empty-stars"} />
            );
        }
        return stars;
      }
    
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
                                {ratingHousing(housingDetails.rating)}
                            </div>
                            <div className="name-and-picture">
                                <p>{housingDetails.host.name}</p>
                                <div className="picture">
                                    <img src={housingDetails.host.picture} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-housing">
                        <DropdownMenu title="Description" content={housingDetails.description}>
                        </DropdownMenu> 
                        <DropdownMenu title="Équipements" content={housingDetails.equipments.map((equip) => (
                            <ul>
                                <li>{equip}</li>
                            </ul>
                        ))}>
                        </DropdownMenu>
                    </div> 
                </div>           
            ) : null                
            }
        </div>

            
    )
}

export default Housing;