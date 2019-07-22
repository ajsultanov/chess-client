/* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the currentIndex */

import React from 'react'

/* should be taking the index prop it has been passed and taking data out of the lessonContent array  */

const Slide = props => {

  const styles = {
    padding:"5px",
    margin:"5px",
    border:"2px solid orange",
  }

  let index = props.index
  const slides = props.lessonContent

  const id = slides[index] ? slides[index].id : "not found"
  const title = slides[index] ? slides[index].title : "not found"
  const description = slides[index] ? slides[index].description : "not found"
  const positions = slides[index] ? slides[index].positions : "not found"

  return <div className="slide" style={styles}>
    inside the slide component
    <h3>{id} - {title}</h3>
    <h4>{description}</h4>
    <h4>{positions[0]}</h4>
  </div>
}

export default Slide
