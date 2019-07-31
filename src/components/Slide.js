  /* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the posIndex */

import React, { Component } from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
border: 1px solid;
  background-color: seashell;
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;

const StyledImg = styled.img`
border: 1px solid purple;
  background-color: rgba(100,100,100,.25);
  min-height: 200px;
  max-height: 50vh;
  width: 50%;
  display: block;
  margin: 0;
`;

const Card = styled.div`
border: 1px solid;
  background-color: lightyellow;
  display: flex;
  width: 40%;
  mid-width: 300px;
  flex-direction: column;
  align-items: stretch;
`;

const TitleBox = styled.div`
border: 1px solid;
  background-color: lightseagreen;
  display: flex;
  flex-direction: column;
  height: 60px;
  text-align: center;
  margin: .25em;
  padding: 0;
  overflow: hidden;
`

const Title = styled.h3`
  margin: 0;
`
const Desc = styled.p`
  margin: 0;
  font-size: .75em;
`

const TextBox = styled.div`
border: 1px solid;
  background-color: lightsteelblue;

  min-height: 400px;
  margin: .5em;
  padding: 0;
`;
const Text = styled.p`
  margin: .25em;
  font-size: 1em;
`

const ToolTip = styled.div`
  color: red;
  background-color: wheat;
  display: block;
  padding: .5em .75em;
  margin: 1em;

    ::before {
      content: "♟ ";
    }
`;

const Footie = styled.span`
border: 1px solid;
  self-align: flex-end;
  text-align: center;
  font-family: Ultra;
`;


class Slide extends Component {

  componentDidMount() {
    this.props.goToNext()
  }
  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    let slide = this.props.content
    let textAry = slide.content.split(/%%/)

    let text = []
    let tips = []

    textAry.forEach((item, i) => {
      if (i % 2 === 0) {
        text.push(item.trim())
      }
      else {
        tips.push(item)
      }
    })

    if (!this.props.content) {
      return <div />
    } else {
      return (
        <StyledContent>
          <StyledImg
            src={slide.image}
            alt={slide.description}
          />
          <Card>
            <TitleBox>
              <Title>~ {slide.id}: {slide.title} ~</Title>
              <Desc>desc: {slide.description}</Desc>
            </TitleBox>

            <TextBox>
              {
                text.map((para, i) => {
                  if (tips[i]) {
                    return <div key={"t" + 1}>
                             <Text>{para}</Text>
                             <ToolTip>{tips[i]}</ToolTip>
                           </div>
                  }
                  else {
                    return <Text key={"p"+i}>{para}</Text>
                  }
                })
              }
            </TextBox>
            <Footie>~~~</Footie>
          </Card>
        </StyledContent>
      )
    }
  }
}

export default Slide
