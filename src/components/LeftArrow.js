/* ^ Carousel ^ */

import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <span className="arrow-left" aria-hidden="true" style={{cursor:"pointer"}}>◀</span>
    </div>
  );
}

export default LeftArrow;
