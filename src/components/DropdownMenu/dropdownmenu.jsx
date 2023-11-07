import React, { useState, useEffect } from 'react';
import "./dropdownmenu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';



function DropdownMenu(props) {
    const [data, setData] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }
    
    useEffect(() => {
        fetch("datas/logements.json")
        .then((response) => {
          if (!response.ok) {
            console.log("Quelque chose s'est mal passé");
          }
          return response.json();
        })
        .then((json) => {
          setData(json);
          console.log(data.description);
        })
      }, []);

    return (
        <div className='dropdown-menu'>
      <button type='button' className="collapsible" onClick={toggleCollapse}>
        Equipement/Description/etc
        <FontAwesomeIcon icon={faChevronUp} className={`chevron-icon ${isCollapsed ? 'down' : 'up'}`} />
      </button>
      <div className={`content-collapsible ${isCollapsed ? "collapsed" : ""}`}>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.description}</p>
            <ul>
              {item.tableau && item.tableau.map((element, subIndex) => (
                <li key={subIndex}>{element}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;