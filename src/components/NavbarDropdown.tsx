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

const ProfileImageDropdown = styled.img`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 0 5px 0 0;
`

const DropdownProfiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5px;
`

const ProfileName = styled.p`
  display: contents;
  padding: 0 0 5px 0;
`

const DropdownItemWrapper = styled.div`
  padding: 5px 0 2px 0;
`

const NavbarDropdown: React.FC = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Dropdown onClick={() => setMenu(!menu)}>
      <ProfileImage src={profile} alt="Profile" />
      <DropdownTriangle></DropdownTriangle>
      {menu ? (
        <DropdownSelect>
          <DropdownProfiles>
            <DropdownItemWrapper>
              <ProfileImageDropdown src={profile} alt="Profile 1"/>
              <ProfileName>User 1</ProfileName>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <ProfileImageDropdown src={profile} alt="Profile 1"/>
              <ProfileName>User 2</ProfileName>
            </DropdownItemWrapper>
            <DropdownItemWrapper>
              <ProfileImageDropdown src={profile} alt="Profile 1"/>
              <ProfileName>User 3</ProfileName>
            </DropdownItemWrapper>
          </DropdownProfiles>
          <p>Manage Profiles</p>
          <hr />
          <p>Account</p>
          <p>Help Center</p>
          <p>Sign Out of Netflix</p>
        </DropdownSelect>
      ) : null }
    </Dropdown>
  )
}

export default NavbarDropdown;