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
  div {
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
          <div>
            <img src="profile" alt=""/>
            <p>User 1</p>
          </div>
          <div>
            <img src="profile" alt=""/>
            <p>User 2</p>
          </div>
          <div>
            <img src="profile" alt=""/>
            <p>User 3</p>
          </div>
        </DropdownSelect>
      ) : null }
    </Dropdown>
  )
}

export default NavbarDropdown;