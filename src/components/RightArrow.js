/* ^ Carousel ^ */
/* this component advances the currentIndex by one */

import React  from 'react';
import styled from 'styled-components';
import './arrow.css';

const ColorChange = styled.div`
  color: ${props => props.active ? "limegreen" : "gray"};
`

const RightArrow = (props) => {

  const onClick = () => {
    if (props.active) {
      props.goToNext()
    }
    else {
      return null
    }
  }

  return (
    <ColorChange className="navArrow" onClick={onClick} active={props.active}>
      <span>▶</span>
    </ColorChange>
  );
}

export default RightArrow;
