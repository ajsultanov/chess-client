/* ^ Carousel ^ & ^ ExampleBoard ^ */
/* this component decrements the currentIndex by one */

import React from 'react';

const LeftArrow = (props) => {

  const styles = {
    display: "inline-block",
    cursor: "pointer",
    color: "blue",
    fontSize: "24px",
    margin: "5px 10px",
  }

  return (
    <div className="navArrow backArrow" onClick={props.goToPrev} style={styles}>
      <span className="arrow-left">◀</span>
    </div>
  );
}

export default LeftArrow;
