import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

/* simple component to handle dropdown menu which sorts employees by first name 
 * and age
 */
const SortDropDown = ({handleSelect}) => (
  <DropdownButton
  alignRight
  title="Sort By"
  id="dropdown-menu-align-right"
  onSelect={handleSelect}
    >
          <Dropdown.Item eventKey="FirstName">First Name</Dropdown.Item>
          <Dropdown.Item eventKey="Age">Age</Dropdown.Item>
  </DropdownButton>
);

export default SortDropDown;