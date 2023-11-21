import React, { useState } from 'react';
import './dropdownmenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function DropdownMenu({ isList, content, title }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  function renderContent() {
    if (isList) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <p>{content}</p>;
    }
  }

  return (
    <div className="dropdown-menu">
      <button type="button" className="collapsible" onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron-icon ${isCollapsed ? 'down' : 'up'}`}
        />
      </button>
      <div className={`content-collapsible ${isCollapsed ? 'collapsed' : ''}`}>
        {renderContent()}
      </div>
    </div>
  );
}

export default DropdownMenu;
