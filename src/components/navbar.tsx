import React from 'react';
import styled from 'styled-components';
import { MdSearch, MdNotificationsNone } from "react-icons/md";

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

const Browse = styled.h3`
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
        <Browse>Browse</Browse>
        <ContentRight>
          <MdSearch size="1.5em" />
          <h3>Kids</h3>
          <h3>DVD</h3>
          <MdNotificationsNone size="1.5em" />
        </ContentRight>
      </NavbarInnerWrapper>
    </NavbarOuterWrapper>
  );
}

export default Navbar;