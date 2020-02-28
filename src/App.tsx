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

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <ImageWrapper>
        <ImageHeader src={BOJ} alt="Bojack Horseman on balcony"/>
        <ImageLogo src={LOGO} alt="Bojack Horseman logo"/>
      </ImageWrapper>
    </div>
  );
}

export default App;
