import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

/* simple component to handle dropdown menu which filters employees by gender */
const FilterDropDown = ({handleSelect}) => (
  <DropdownButton
  alignRight
  title="Filter By Gender"
  id="dropdown-menu-align-right"
  onSelect={handleSelect}
    >
          <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
          <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
  </DropdownButton>
);

export default FilterDropDown;