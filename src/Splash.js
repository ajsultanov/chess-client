/* Splash Page! */

import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import styled               from 'styled-components';

const Billboard = styled.div`
/* border: 1px solid; */
  height: 600px;
  padding: 2em;
  align-self: center;
  box-shadow: inset 0 0 20px mediumorchid;
`;

const Background = styled.div`
/* border: 5px solid lime; */
  background-image: url("https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
  background-size: cover;
`;

const Title = styled.div`
/* border: 1px solid; */
  font-size: 64pt;
  color: pink;
`;

const Column = styled.div`
/* border: 1px solid; */
  width: 50%;
  min-width: 400px;
  color: white;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
/* border: 1px solid; */
  color: black;
  background-color: rgba(240, 240, 255, .75);
  margin: 0 0 1em;
  padding: 1em;
`;

const TopText = styled(Text)`
/* border: 1px solid red; */
  margin-top: 1em;
`;

const Button = styled(Link)`
/* border: 1px solid; */
  font-family: BioRhyme;
  font-size: 1em;
  color: white;
  width: 50%;
  max-width: 200px;
  background-color: slateblue;
  text-align: center;
  margin-top: 1em;
  padding: 1.25em 1.5em;

  &:hover {
    box-shadow: 0 0 1em inset mediumorchid;
  }
`;

class Splash extends Component {
  render() {
    return (
      <div>
      <Background>
        <Billboard>
          <Title>
            SPLASH&nbsp;PAGE!!!!!
          </Title>
          <Column>
            <TopText>
              Hello yes here is some filler text love it. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </TopText>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button to="/signup">Get started</Button>
          </Column>
        </Billboard>
      </Background>
      </div>
    );
  }
}
export default Splash
