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


function Housing() {
    const [housingDetails, setHousingDetails] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
      
    // Récupérer l'id pour savoir sur quel élément on est
    // aller chercher l'ensemble des logements depuis .json
    // on va faire une boucle pour trouver le bon élément et 
    // comparer l'id depuis celui qu'on vient de récupérer
    // une fois le logement trouver, on le retourne
    // setHousingDetails.
    // si aucun logement ne match, redirection page erreur ou return error
    
    useEffect(() => {
        console.log(id);
        const logementsServices = new LogementsServices();
        logementsServices.getLogementsById(id) 
        .then((data) => {
            console.log(data);
        })
      }, [id]);
    
    
    // console.log(housingList);
    return (
        <div></div>
        // <div className="housing">
        //     <div className="img-housing">   
        //         <div className="chevron-left">
        //             <FontAwesomeIcon icon={faChevronLeft} />
        //         </div>
        //         <img src="" alt="" />   
        //         <div className="chevron-right">
        //             <FontAwesomeIcon icon={faChevronRight} />
        //         </div>
        //     </div>
        //     <div className="housing-content">
        //         <h1>Paris center, on the romantic Canal Saint-Martin</h1>
        //         <p>Paris, Île-de-France</p>
        //         <div className="filters">
        //             <div>Cozy</div>
        //             <div>Canal</div>
        //             <div>Paris 10</div>
        //         </div>
        //         <div className="rating-and-name">
        //             <div className="rating">
        //                 <FontAwesomeIcon icon={faStar} />
        //                 <FontAwesomeIcon icon={faStar} />
        //                 <FontAwesomeIcon icon={faStar} className="empty-stars" />
        //                 <FontAwesomeIcon icon={faStar} />
        //                 <FontAwesomeIcon icon={faStar} />
        //             </div>
        //             <div className="name-and-picture">
        //                 <p>Alexandre Dumas</p>
        //                 <div className="picture"></div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="dropdown-housing">
        //         <DropdownMenu />
        //         <DropdownMenu />
        //     </div>
        // </div>
    )
}

export default Housing;