/* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the currentIndex */

import React from 'react'
import Board from '../Board'

/* should be taking the index prop it has been passed and taking data out of the lessonContent array  */

const Slide = props => {

  const styles = {
    padding:"5px",
    margin:"5px",
    border:"2px solid orange",
  }

  const index = props.index
  const slides = props.lessonContent

  const id = slides[index] ? slides[index].id : "not found"
  const title = slides[index] ? slides[index].title : "not found"
  const description = slides[index] ? slides[index].description : "not found"
  const positions = slides[index] ? slides[index].positions : "not found"

  console.log(slides[index]);

  return <div className="slide" style={styles}>
    inside the slide component
    <h3>id: {slides[index].id} - title: {title}</h3>
    <h4>desc: {description}</h4>
    <h4>1st position: {positions[0]}</h4>
    <Board positions={positions}/>
  </div>
}

export default Slide
