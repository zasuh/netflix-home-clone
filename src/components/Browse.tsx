import React, { useState } from 'react';
import styled from 'styled-components';

const BrowseWrapper = styled.div`
  display: inline-block;
`

const BrowseTitle = styled.h3`
  display: inline-block;
  color: white;
  padding: 0 0 0 20px;
`

const BrowseWindow = styled.div`
  position: absolute;
  left: 230px;
  width: 500px;
  height: 300px;
  background-color: black;
  color: white;
  border: solid white 1px;
`

const Browse: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <BrowseWrapper onClick={() => {setOpen(!open)}}>
      <BrowseTitle>Browse</BrowseTitle>
      {open ? (
        <BrowseWindow>
          Hello
        </BrowseWindow>
      ) : null}
    </BrowseWrapper>
  )
}

export default Browse;