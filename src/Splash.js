/* Splash Page! */

import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import styled               from 'styled-components';


const Splish = styled.div`
/* border: 5px solid lime; */
  background-image: url("https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
  background-size: cover;
  /* opacity: .5; */
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 239, 213, 0.5);
`;

const Billboard = styled.div`
/* border: 1px solid; */
height: 80vh;
padding: 2em;
align-self: center;
/* box-shadow: inset 0 10px 20px 5px azure; */
`;

const Title = styled.div`
/* border: 1px solid; */
  font-size: 64pt;
  color: white;
  font-style: italic;
  text-align: center;
  background-color: salmon;
  border-radius: 60px;
`;

const Column = styled.div`
/* border: 1px solid; */
  width: 70%;
  min-width: 400px;
  color: white;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Text = styled.p`
/* border: 1px solid; */
  color: black;
  background-color: rgba(250, 250, 255, .8);
  margin: 0 1em 1em;
  padding: 1em;
  border-radius: 3px;
`;

const TopText = styled(Text)`
/* border: 1px solid red; */
  margin-top: 2em;
`;

const Button = styled(Link)`
/* border: 1px solid; */
  font-family: BioRhyme;
  font-size: 1em;
  color: white;
  width: 50%;
  margin: 0 14em;
  max-width: 200px;
  background-color: slateblue;
  text-align: center;
  /* margin-top: 1em; */
  padding: 1.25em 1.5em;
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 1em inset mediumorchid;
  }
`;

class Splash extends Component {
  render() {
    return (
      <Splish>
        <Background>
          <Billboard>
            <Title>
              CHESS&nbsp;&nbsp;for&nbsp;&nbsp;Rookies!
            </Title>
            <Column>
              <TopText>
                Chess has been persuasively linked with improving children's concentration, problem-solving, critical, original and creative thinking – and even mathematical abilities. It is also said to help with memory storage and how young brains manage information – and should not only be perceived as a game for gifted children.
                <a href="https://theconversation.com/why-chess-is-good-for-young-brains-53657">*</a>
                <br/><br/>&nbsp;Some of the benefits of playing chess for children include:
              </TopText>
              <Text>
                Improves memory and concentration
              </Text>
              <Text>
                Teaches planning and foresight
              </Text>
              <Text>
                Increases creativity
              </Text>
              <Text>
                Improves reading skills
              </Text>
              <Text>
                Improves visual memory
              </Text>
              <Text>
                Lengthens attention span
              </Text>
              <Text>
                Develops spatial-reasoning
              </Text>
              <Button to="/signup">Get started</Button>
            </Column>
          </Billboard>
        </Background>
      </Splish>
    );
  }
}
export default Splash
