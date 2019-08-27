/* ^ Index ^ */

import React, { Component}      from 'react';
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import { connect }              from "react-redux";
import UserSignup               from './components/UserSignup'
import UserLogin                from './components/UserLogin'
import ProfileContainer         from './containers/ProfileContainer'
import LessonContainer          from './containers/LessonContainer'
import LessonsContainer         from './containers/LessonsContainer'
import Menu                     from './containers/Menu'
import NewBoard                 from './NewBoard'
import MyBoard                  from './MyBoard'
import ConstructorBoard         from './ConstructorBoard'
import Splash                   from './Splash'
import { fetchLessons }         from './actions'
import styled                   from 'styled-components'
import './App.css';

console.log("%c ♞ ", "color:#fc0;font-size:48px;text-shadow:0px 5px 3px #A45,-5px 5px 3px #945,-5px 0px 3px #645,-5px -5px 3px #534,0px -5px 3px #645,5px -5px 3px #945,5px 0px 3px #A45,5px 5px 3px #E45")

const Wrapper = styled.div`
/* border: 1px solid; */
  /* background-color: mistyrose; */
  /* background-image: url('./polka.png');
  background-size: 32px;
  background-repeat: repeat; */
  background-color: papayawhip;

  width: 100%;
  /* min-height: 100vh; */
  min-height: 96vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`;

const Footer = styled.div`
/* border: 1px solid; */
  background-color: lightpink;
  color: white;
  text-align: right;
  padding-right: 1em;
  overflow: hidden;
  height: 4vh;
  vertical-align: middle;
`;

class App extends Component {

  componentDidMount = () => {
    this.props.fetchLessons()
  }

  render(){
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.props.currentUser
        ?
          <Component {...props}/>
        :
          <Redirect to="/login" />
      )}/>
    )

    return (
      <BrowserRouter>
      <Wrapper>
        <Menu />

        <Route path="/signup"         render={props => <UserSignup {...props} user={this.props.currentUser} />} />
        <Route path="/login"          render={props => <UserLogin {...props} user={this.props.currentUser} />} />
        <Route path="/logout"         component={UserLogin} />
        <Route path="/play"           component={NewBoard} />
        <Route exact path="/"         component={Splash} />

      {/* everything below must be changed back to a PrivateRoute for login to work!! */}

        <PrivateRoute path="/home"           component={ProfileContainer} />
        <PrivateRoute exact path="/lessons"  component={LessonsContainer} />
        <PrivateRoute path="/lessons/:id"    component={LessonContainer} />

      {/* dev routes */}

        <Route path="/constructor" component={ConstructorBoard} />
        <Route path="/MyBoard" component={MyBoard} />
        </Wrapper>

        <Footer className="hello">
          <Link to="/play">
            Oh, hello
          </Link>
        </Footer>

      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchLessons })(App);
