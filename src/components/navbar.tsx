import React from 'react';
import styled from 'styled-components';
import NavbarDropdown from './NavbarDropdown';
import { MdSearch, MdNotificationsNone } from "react-icons/md";
import { FaGift } from "react-icons/fa";

const NavbarOuterWrapper = styled.header`
	background: black;
`

const NavbarInnerWrapper = styled.div`
	margin: 0 auto;
	max-width: 960;
  padding: 1rem 1rem;
`

const NavbarTitle = styled.h1`
  display: inline-block;
  margin: 0;
  color: #E50914;
`

const ContentLeft = styled.h3`
  position: relative;
  bottom: 2px;
  display: inline-block;
  color: white;
  padding: 0 0 0 1rem;
  margin: 0;
`

const ContentRight = styled.div`
  display: inline-block;
  color: white;
  float: right;
  padding: 0 0 0 1rem;
  margin: 0;
  h3 {
    display: inline-block;
    position: relative;
    bottom: 2px;
    padding: 0 1rem 1rem 1rem;
  }
  svg {
    position: relative;
    top: 20px;
    padding: 0 1rem 1rem 1rem;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavbarOuterWrapper>
      <NavbarInnerWrapper>
        <NavbarTitle>Netflix Clone</NavbarTitle>
        <ContentLeft>Home</ContentLeft>
        <ContentLeft>TV Shows</ContentLeft>
        <ContentLeft>Movies</ContentLeft>
        <ContentLeft>Latest</ContentLeft>
        <ContentLeft>My List</ContentLeft>
        <ContentRight>
          <MdSearch size="1.5em" />
          <FaGift size="1.5em" />
          <MdNotificationsNone size="1.5em" />
          <NavbarDropdown />
        </ContentRight>
      </NavbarInnerWrapper>
    </NavbarOuterWrapper>
  );
}

export default Navbar;