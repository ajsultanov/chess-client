/* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the posIndex */

import React, { Component } from 'react'

/* should be taking the index prop it has been passed and taking data out of the content array  */

class Slide extends Component {


  styles = {
    padding:"5px",
    margin:"5px",
    backgroundColor:"#fff",
    border:"2px solid orange",
    overflow:"hidden"
  }

  render() {
    console.log("slide id: ", this.props.content.id);

    if (!this.props.content) {
      return <div />
    } else {

      const slide = this.props.content

      return <div className="slide" style={this.styles}>
        [inside the slide component]
        <h4>id: {slide.id} - title: {slide.title}</h4>
        <p>desc: {slide.description}</p>
        <img src={slide.image} style={{height:"256px",width:"256px",border:"1px solid black",display:"block",position:"relative", float:"left", marginRight:"10px"}} alt="ok" />
        <p>{slide.content}</p>
      </div>
    }
  }
}

export default Slide
