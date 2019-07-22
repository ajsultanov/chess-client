/* ^ Carousel ^ */
/* this component decrements the currentIndex by one */

import React from 'react';
import '../styles.css';

const LeftArrow = (props) => {
  return (
    <div className="navArrow backArrow" onClick={props.goToPrevSlide}>
      <span className="arrow-left">◀</span>
    </div>
  );
}

export default LeftArrow;
