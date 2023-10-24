import DropdownMenu from "../../components/DropdownMenu";
import styled from "styled-components";
import backHousingMobile from "../../assets/back-housing-mobile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const StyledHousing = styled.div`
    color: #FF6060;
    & h1, p {
        font-family: Montserrat, sans-serif; 
        margin-left: 20px; 
    }  
    & h1 {        
        font-size: 18px;
        margin: 10px 20px;
    }
    & .img-housing {        
        width: auto;
        height: 255px;
        position: relative;
        margin: 0 20px 35px 20px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            border-radius: 10px;
        }
        & .chevron-left, .chevron-right {
            position: relative;
            color: black;
            font-size: 20px;
        }
        & .chevron-right {
            right: -100px;
        }
    }
    & .filters {
        display: flex;
        margin: 10px 0;   
        margin-left: 20px;      
        & div {
        font-size: 12px;
        width: 80px;
        margin-right: 10px;
        border: 1px solid #FF6060;
        border-radius: 6px;
        text-align: center;
        background-color: #FF6060;
        color: white;
        }
    }
    & .rating-and-name {
        display: flex;
        justify-content: flex-end;
        & .name-and-picture {
            display: flex;
            margin-bottom: 10px;
            & .picture {
            width: 40px;
            height: 40px;
            border: 1px solid gray;
            border-radius: 50px;
            margin-right: 20px;
            background-color: gray;
            } 
            & p {
                width: 100px;
                text-align: right;
                margin-right: 5px;
            }  

        }
        

    }
    
`

function Housing() {
    return (
        <StyledHousing>
            <div className="img-housing">   
                <div className="chevron-left">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <img src={backHousingMobile} alt="" />   
                <div className="chevron-right">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <h1>Paris center, on the romantic Canal Saint-Martin</h1>
            <p>Paris, Île-de-France</p>
            <div className="filters">
                <div>Cozy</div>
                <div>Canal</div>
                <div>Paris 10</div>
            </div>
            <div className="rating-and-name">
                <i></i>
                <div className="name-and-picture">
                    <p>Alexandre Dumas</p>
                    <div className="picture"></div>
                </div>
            </div>
            <div className="dropdown-housing">
                <DropdownMenu />
                <DropdownMenu />
            </div>
        </StyledHousing>
    )
}

export default Housing;