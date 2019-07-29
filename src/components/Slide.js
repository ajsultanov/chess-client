  /* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the posIndex */

import React, { Component } from 'react'
import styled from 'styled-components'


const ToolTip = styled.div`
  color: red;
  background-color: seashell;
  display: block;
  padding: 5px 10px;
  margin: 5px;

    ::before {
      content: "🗺 ";
    }
`;


class Slide extends Component {

  styles = {
    padding:"5px",
    margin:"5px",
    backgroundColor:"#fff",
    border:"2px solid orange",
    overflow:"hidden"
  }

  componentDidMount() {
    this.props.goToNext()
  }

  slide = this.props.content

  dumbo = this.slide.content.split(/%%/)

  render() {

    let text = []
    let tips = []

    this.dumbo.forEach((item, i) => {
      if (i % 2 === 0) {
        text.push(item.trim())
      }
      else {
        tips.push(item)
      }
    })

    console.log(tips[0]);

    if (!this.props.content) {
      return <div />
    } else {

      return <div className="slide" style={this.styles}>
        [inside the slide component]
        <h4>id: {this.slide.id} - title: {this.slide.title}</h4>
        <p>desc: {this.slide.description}</p>
        <img
          src={this.slide.image}
          style={{height:"360px", width:"256px", border:"1px solid black", display:"block", position:"relative", float:"left", marginRight:"10px"}}
          alt="ok"
        />
        <p>{text[0]}......{tips[0]}......{text[1]}</p>

        {
          text.map((para, i) => {
            if (tips[i]) {
              return <div>
                       <p key={"p"+i}>{para}</p>
                       <ToolTip key={"t"+i}>{tips[i]}</ToolTip>
                     </div>
            }
            else {
              return <p key={"p"+i}>{para}</p>
            }
          })
        }


      </div>
    }
  }
}

export default Slide
