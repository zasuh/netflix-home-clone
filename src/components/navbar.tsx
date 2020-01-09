import React from 'react';
import styled from 'styled-components';
import { FaSistrix } from "react-icons/fa";

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

const Browse = styled.div`
  position: relative;
  bottom: 2px;
  display: inline-block;
  color: white;
  padding: 0 0 0 1rem;
  margin: 0;
`

const Icons = styled.div`
  display: inline-block;
  color: white;
  float: right;
  padding: 0 0 0 1rem;
  margin: 0;
`

const Navbar: React.FC = () => {
  return (
    <NavbarOuterWrapper>
      <NavbarInnerWrapper>
        <NavbarTitle>Netflix Clone</NavbarTitle>
        <Browse>Browse</Browse>
        <Icons>
          <FaSistrix />
        </Icons>
      </NavbarInnerWrapper>
    </NavbarOuterWrapper>
  );
}

export default Navbar;