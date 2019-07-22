/* ^ Carousel ^ */
/* this component advances the currentIndex by one */

import React from 'react';
import '../styles.css';

const RightArrow = (props) => {
  return (
    <div className="navArrow nextArrow" onClick={props.goToNextSlide}>
      <span className="arrow-right">▶</span>
    </div>
  );
}

export default RightArrow;
