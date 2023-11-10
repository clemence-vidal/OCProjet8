import React, { useState } from 'react';
import "./dropdownmenu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';



function DropdownMenu({ collapse, content, title }) {   
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
  }

    return (
        <div className='dropdown-menu'>
          <button type='button' className="collapsible" onClick={toggleCollapse}>
            {title}
            <FontAwesomeIcon icon={faChevronUp} className={`chevron-icon ${isCollapsed ? 'down' : 'up'}`} />
          </button>
          <div className={`content-collapsible ${isCollapsed ? "collapsed" : ""}`}>
            {content}
          </div>
        </div>
  );
}

export default DropdownMenu;