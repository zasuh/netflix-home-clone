import React from 'react';
import styled from 'styled-components';
import B99 from '../assets/first-row/b99.jpg'
import CAS from '../assets/first-row/castlevania.jpg'
import ST from '../assets/first-row/stranger-things.jpg'
import MR from '../assets/first-row/mrrobot.jpg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  position: absolute;
  top: 750px;
  left: 20px;
  padding: 0 0 40px 0;
`

const PreviewImage = styled.img`
  padding-right: 20px;
  height: auto;
  width: 450px;
`


const FirstRow: React.FC = () => {
  return (
    <Wrapper>
      <PreviewImage src={B99} alt="Brooklyn 99 wallpaper"/>
      <PreviewImage src={CAS} alt="Castlevania wallpaper"/>
      <PreviewImage src={ST} alt="Stranger Things wallpaper"/>
      <PreviewImage src={MR} alt="Mr Robot wallpaper"/>
    </Wrapper>
  )
}

export default FirstRow;