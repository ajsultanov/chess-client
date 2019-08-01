/* ^ Carousel ^ */
/* this component is a container for the lesson content shown at any one given time, dictated by the index */

import React, { Component } from 'react'
import ExampleBoard         from '../ExampleBoard'
import TestBoard            from '../TestBoard'
import LeftArrow            from "./LeftArrow";
import RightArrow           from "./RightArrow";
import styled               from 'styled-components'

const StyledContent = styled.div`
/* border: 1px solid; */
  /* background-color: seashell; */
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;

const BoardContainer = styled.div`
/* border: 1px solid purple; */
  /* background-color: rgba(100,100,100,.25); */
  min-height: 200px;
  max-height: 70vh;
  min-width: 500px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  overflow: hidden;
`;

const BoardContainer2 = styled(BoardContainer)`
  justify-content: center;
`;

const Win = styled.h4`
/* border: 1px solid; */
  font-size: 4em;
`;

const NavButton = styled.div`
/* border: 1px solid red; */
  background-color: ${props => props.active ? "orange" : "lightslategray"};
  width: 10%;
  max-width: 100px;
  height: 30%;
  font-size: 2em;
  text-align: center
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 40px;
  color: ${props => props.active ? "white" : "lightgray"};
`;

const Stretch = styled.span`
  transform: scale(1, 2);
`;

const Card = styled.div`
/* border: 1px solid; */
  background-color: ivory;
  display: flex;
  width: 30%;
  min-width: 250px;
  flex-direction: column;
  align-items: stretch;
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
`
const Desc = styled.p`
  margin: 0;
  font-size: .75em;
`

const TextBox = styled.div`
/* border: 1px solid; */
  /* background-color: papayawhip; */

  min-height: 400px;
  margin: .5em;
  padding: 0;
`;
const Text = styled.p`
  margin: .25em;
  font-size: 1em;
`

const Footie = styled.span`
/* border: 1px solid; */
  self-align: flex-end;
  text-align: center;
  font-family: Ultra;
  font-size: 1.5em;
`;

class Puzzle extends Component {

  render() {
    if (!this.props.content) {
      return <div />
    } else {

      let puzzle = this.props.content

      return <StyledContent>

        {
          this.props.content.style === "puzzle"
        ?
          <BoardContainer>
            <NavButton
              onClick={this.props.goToPrev}
              active={this.props.index !== 0}
            >
              <Stretch>◀</Stretch>
            </NavButton>
            <ExampleBoard
              positions={puzzle.positions}
              index={this.props.index}
              style={{left:"10px"}}
            />
            <NavButton
              onClick={this.props.goToNext}
              active={this.props.index !== puzzle.positions.length - 1}
            >
              <Stretch>▶</Stretch>
            </NavButton>
          </BoardContainer>
        :
          <BoardContainer2>
            {
              this.props.index === puzzle.positions.length - 1
            ?
              <Win>You did it!</Win>
            :
              <TestBoard
                positions={puzzle.positions}
                moves={puzzle.moves}
                goToNext={this.props.goToNext}
                index={this.props.index}
              />
            }
          </BoardContainer2>
        }
        <Card>
          <TitleBox>
            <Title>~ {puzzle.id}: {puzzle.title} ~</Title>
            <Desc>desc: {puzzle.description}</Desc>
          </TitleBox>

          <TextBox>
            <Text>{puzzle.description}</Text>
          </TextBox>
          <Footie>~~~</Footie>
        </Card>

      </StyledContent>
    }
  }
}

export default Puzzle
