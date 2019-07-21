/* ^ Carousel ^ */

import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <span className="arrow-right" aria-hidden="true" style={{cursor:"pointer"}}>▶</span>
    </div>
  );
}

export default RightArrow;
