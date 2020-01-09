import React from 'react';
import styled from 'styled-components';

const NavbarOuterWrapper = styled.header`
	background: black;
	margin: 0 0 1.45rem 0;
`

const NavbarInnerWrapper = styled.div`
	margin: 0 auto;
	max-width: 960;
	padding: 1rem 1rem;
`

const NavbarTitle = styled.h1`
  margin: 0;
  color: #E50914;
`

const Browse = styled.span`
  text-align: center;
  color: white;
`

const Navbar: React.FC = () => {
  return (
    <NavbarOuterWrapper>
      <NavbarInnerWrapper>
        <NavbarTitle>Netflix Clone</NavbarTitle>
        <Browse>Browse</Browse>
      </NavbarInnerWrapper>
    </NavbarOuterWrapper>
  );
}

export default Navbar;