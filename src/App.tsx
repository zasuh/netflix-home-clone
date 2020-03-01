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

  h4 {
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
`

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <ImageWrapper>
        <ImageHeader src={BOJ} alt="Bojack Horseman on balcony"/>
        <ImageLogo src={LOGO} alt="Bojack Horseman logo"/>
        <h4>Watch the final episodes now</h4>
        <ShowDesc>He's a half-horse, half-man, has-been TV star who drinks a bit too much. He'r really got a lot going right now.</ShowDesc>
      </ImageWrapper>
    </div>
  );
}

export default App;
