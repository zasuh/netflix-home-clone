import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  display: inline-block;
`

const DropdownSelect = styled.select`
  background-color: black;
  color: white;
  border: solid black 1px;
`

const NavbarDropdown: React.FC = () => {
  return (
    <Dropdown>
      <DropdownSelect name="pets">
        <option value=""></option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </DropdownSelect>
    </Dropdown>
  )
}

export default NavbarDropdown;