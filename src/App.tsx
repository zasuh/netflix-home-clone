import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import './App.css';

import BOJ from './assets/bojack3.jpg';
import LOGO from './assets/bojlogo.png';

const ImageWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  h3 {
    position: absolute;
    top: 270px;
    left: 50px;
    max-width: 600px;
    color: white;
  }
`

const ImageHeader = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 1905px;
  height: 1000px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`

const ImageLogo = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
`

const ShowDesc = styled.p`
  position: absolute;
  top: 300px;
  left: 50px;
  max-width: 600px;
  color: white;
  font-size: 24px;
`

const HeaderButton = styled.a`
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;

  &:hover{
    color: #000;
    background-color: #FFF;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 400px;
  left: 50px;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <ImageWrapper>
        <ImageHeader src={BOJ} alt="Bojack Horseman on balcony"/>
        <ImageLogo src={LOGO} alt="Bojack Horseman logo"/>
        <h3>Watch the final episodes now</h3>
        <ShowDesc>He's a half-horse, half-man, has-been TV star who drinks a bit too much. He'r really got a lot going right now.</ShowDesc>
        <ButtonWrapper>
          <HeaderButton href="something">Watch Now</HeaderButton>
          <HeaderButton href="something">Add To List</HeaderButton>
        </ButtonWrapper>
      </ImageWrapper>
    </div>
  );
}

export default App;
