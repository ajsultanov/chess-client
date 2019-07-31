/* ^ Carousel ^ */
/* this component advances the currentIndex by one */

import React  from 'react';
import styled from 'styled-components';
import './arrow.css';

const ColorChange = styled.div`
  color: ${props => props.active ? "limegreen" : "gray"};
  /* border: 1px solid; */
  background-color: mistyrose;
  width: 200px;
  font-size: 1.25em;
  text-align: center;
  padding: 10px;
  margin: .5em;
  height: 30px;
`;

const Button = styled.p`
/* border: 1px solid; */
  margin: 0;
`;

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
      <Button>Next ▶</Button>
    </ColorChange>
  );
}

export default RightArrow;
