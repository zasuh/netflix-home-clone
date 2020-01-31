import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`

const ContentLeft = styled.div`
  padding: 20px;
`

const ContentRight = styled.div`
  padding: 20px;
`

const BrowseContent: React.FC = () => {
  return (
    <ContentWrapper>
      <ContentLeft>
        <h3>Action</h3>
        <h3>Adventure</h3>
        <h3>Comedy</h3>
      </ContentLeft>
      <ContentRight>
        <h3>Horror</h3>
        <h3>Documentary</h3>
        <h3>Reality</h3>
      </ContentRight>
    </ContentWrapper>
  )
}

export default BrowseContent;