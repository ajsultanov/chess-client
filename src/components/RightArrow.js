/* ^ Carousel ^ */
/* this component advances the currentIndex by one */

import React from 'react';

const RightArrow = (props) => {

  const styles = {
    display: "inline-block",
    cursor: "pointer",
    color: "blue",
    fontSize: "24px",
    margin: "5px 10px",
  }

  return (
    <div className="navArrow nextArrow" onClick={props.goToNext} style={styles}>
      <span className="arrow-right">▶</span>
    </div>
  );
}

export default RightArrow;
