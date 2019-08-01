  /* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the posIndex */

import React, { Component } from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
/* border: 1px solid; */
  /* background-color: seashell; */
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;

const StyledImg = styled.img`
/* border: 1px solid purple; */
  /* background-color: rgba(128, 128, 128, .25); */
  min-height: 200px;
  max-height: 60vh;
  width: 50%;
  display: block;
  margin: 0;
  border-radius: 3px;
  object-fit: cover;
`;

const Card = styled.div`
/* border: 1px solid; */
  background-color: ivory;
  display: flex;
  max-width: 600px;
  width: 40%;
  min-width: 300px;
  flex-direction: column;
  align-items: stretch;
  border-radius: 3px;
`;

const TitleBox = styled.div`
/* border: 1px solid; */
  /* background-color: lightseagreen; */
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
  color: navy;
  font-weight: normal;
`
const Desc = styled.p`
  margin: 0;
  color: slateblue;
  font-size: .75em;
`

const TextBox = styled.div`
/* border: 1px solid; */
  /* background-color: lightyellow; */

  min-height: 400px;
  margin: .5em;
  padding: 0;
`;
const Text = styled.p`
  color: navy;
  margin: .25em;
  font-size: 1em;
`

const ToolTip = styled.div`
  color: darkslategray;
  background-color: gainsboro;
  display: block;
  padding: .5em .75em;
  margin: 1em;

    ::before {
      content: "♟ ";
    }
`;

const Footie = styled.span`
/* border: 1px solid; */
  color: navy;
  self-align: flex-end;
  text-align: center;
  font-family: Shrikhand;
  font-size: 1.5em;
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
              <Title>{slide.title}</Title>
              <Desc>{slide.description}</Desc>
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
