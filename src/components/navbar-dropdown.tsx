import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  display: inline-block;
`

const DropdownSelect = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  background-color: black;
  color: white;
  border: solid black 1px;
  button {
    display: block;
    margin: 10px 0 10px 0;
    background-color: black;
    color: white;
    border: solid black 1px;
    width: 90px;
  }
`

const DropdownTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 7.5px 0 7.5px;
  border-color: #ffffff transparent transparent transparent;
`

const NavbarDropdown: React.FC = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Dropdown>
      <DropdownTriangle onClick={() => setMenu(!menu)}></DropdownTriangle>
      {menu ? (
        <DropdownSelect>
          <button>Item1</button>
          <button>Item2</button>
          <button>Item3</button>
        </DropdownSelect>
      ) : null }
    </Dropdown>
  )
}

export default NavbarDropdown;