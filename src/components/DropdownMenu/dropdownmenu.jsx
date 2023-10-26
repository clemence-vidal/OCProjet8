import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const StyledMenu = styled.div`
    margin: 0 20px 15px 20px;
    & select {
        padding: 5px 5px;
        color: white;
        border: 1px solid #FF6060;
        border-radius: 6px;
        background-color: #FF6060;
        width: 100%;
        appearance: none;
    }
    & .icon-chevron {
        color : green;
        position: absolute;
        right: 20px;
    }

    @media (min-width: 768px) {
        margin: 30px 200px;
        & select {
            padding: 0 20px;
            height: 50px;
            font-size: 20px;
        }
    }
`

function DropdownMenu() {
    return (
        <StyledMenu>
            <label for="choix"></label>
            <select id="choix">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="icon-chevron">                
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
        </StyledMenu>
    )
}

export default DropdownMenu;