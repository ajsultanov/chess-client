/* ^ Carousel ^ & ^ ExampleBoard ^ */
/* this component decrements the currentIndex by one */

import React  from 'react';
import styled from 'styled-components';
import './arrow.css';

const ColorChange = styled.div`
  color: ${props => props.active ? "limegreen" : "gray"};
`

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
      <span>◀</span>
    </ColorChange>
  );
}

// {"navArrow" + props.active ? "active" : null}

export default LeftArrow;
