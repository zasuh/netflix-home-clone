import React, { useState } from 'react';
import styled from 'styled-components';
import profile from '../assets/profile.jpg';

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
  display: inline-block;
  padding-bottom: 8px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 7px 0 7px;
  border-color: #ffffff transparent transparent transparent;
`

const ProfileImage = styled.img`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 0 5px 0 0;
`

const NavbarDropdown: React.FC = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Dropdown onClick={() => setMenu(!menu)}>
      <ProfileImage src={profile} alt="Profile" />
      <DropdownTriangle></DropdownTriangle>
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