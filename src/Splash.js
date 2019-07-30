/* Splash Page! */

import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import styled               from 'styled-components';

const ok = "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"

const Billboard = styled.div`
border: 1px solid;
  width: 80%;
  height: 600px;
  margin: 1em;
  padding: 2em;
  align-self: center;
  background-image: url(${ok});
  box-shadow: inset 0 0 20px green;
`;

const Title = styled.div`
border: 1px solid;
  font-size: 64pt;
  color: pink;
`;

const Column = styled.div`
border: 1px solid;
  width: 50%;
  color: white;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
border: 1px solid;
  color: black;
  background-color: rgba(240, 240, 255, .5);
  margin: 0 0 1em;
`;

const TopText = styled(Text)`
border: 1px solid red;
  margin-top: 1em;
`;

const Button = styled(Link)`
border: 1px solid;
  font-family: BioRhyme;
  font-size: .75em;
  color: white;
  width: 50%;
  background-color: slateblue;
  text-align: center;
  margin-top: 1em;
  padding: 1.25em 1.5em;
`;

class Splash extends Component {
  render() {
    return (
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
          <Button to="/signup">Click here to get started</Button>
        </Column>
      </Billboard>
    );
  }
}
export default Splash
