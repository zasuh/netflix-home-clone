import React from 'react';
import styled from 'styled-components';
import B99 from '../assets/first-row/b99.jpg'
import CAS from '../assets/first-row/castlevania.jpg'
import ST from '../assets/first-row/stranger-things.jpg'

const PreviewImage = styled.img`
  padding-right: 20px;
  height: auto;
  width: 500px;
`

const FirstRow: React.FC = () => {
  return (
    <div>
      <PreviewImage src={B99} alt="Brooklyn 99 wallpaper"/>
      <PreviewImage src={CAS} alt="Castlevania wallpaper"/>
      <PreviewImage src={ST} alt="Stranger Things wallpaper"/>
    </div>
  )
}

export default FirstRow;