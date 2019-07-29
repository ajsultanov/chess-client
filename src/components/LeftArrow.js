/* ^ Carousel ^ & ^ ExampleBoard ^ */
/* this component decrements the currentIndex by one */

import React from 'react';

const LeftArrow = (props) => {

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
      props.goToPrev()
    }
    else {
      return null
    }
  }

  return (
    <div className="navArrow backArrow" onClick={onClick} style={props.active ? activeStyles : styles}>
      <span className="arrow-left">◀</span>
    </div>
  );
}

export default LeftArrow;
