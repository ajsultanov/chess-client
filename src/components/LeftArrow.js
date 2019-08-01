/* ^ Carousel ^ & ^ ExampleBoard ^ */
/* this component decrements the currentIndex by one */

import React  from 'react';
import styled from 'styled-components';
import './arrow.css';

const ColorChange = styled.div`
  color: ${props => props.active ? "white" : "gray"};
  /* border: 1px solid; */
`;

const Button = styled.p`
/* border: 1px solid; */
  margin: 0;
`;

const LeftArrow = (props) => {

  const onClick = () => {
    if (props.active) {
      props.goToPrev()
    }
    else {
      return null
    }
  }

  return (
    <ColorChange className="navArrow" onClick={onClick} active={props.active}>
      <Button>◀&nbsp;&nbsp;&nbsp;Previous</Button>
    </ColorChange>
  );
}

export default LeftArrow;
