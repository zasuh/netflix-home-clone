import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  display: inline-block;
`

const DropdownSelect = styled.div`
  background-color: black;
  color: white;
  border: solid black 1px;
`

const NavbarDropdown: React.FC = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Dropdown>
      <div onClick={() => setMenu(!menu)}>Show menu</div>
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