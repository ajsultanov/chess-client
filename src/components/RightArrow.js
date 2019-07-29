/* ^ Carousel ^ */
/* this component advances the currentIndex by one */

import React from 'react';

const RightArrow = (props) => {

  const activeStyles = {
    display: "inline-block",
    cursor: "pointer",
    color: "blue",
    fontSize: "24px",
    margin: "5px 10px",
  }
  const styles = {
    display: "inline-block",
    cursor: "pointer",
    color: "gray",
    fontSize: "24px",
    margin: "5px 10px",
  }

  const onClick = () => {
    if (props.active) {
      props.goToNext()
    }
    else {
      return null
    }
  }

  return (
    <div className="navArrow nextArrow" onClick={onClick} style={props.active ? activeStyles : styles}>
      <span className="arrow-right">▶</span>
    </div>
  );
}

export default RightArrow;
