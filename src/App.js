/* ^ Index ^ */

import React, { Component}      from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect }              from "react-redux";
import UserSignup               from './components/UserSignup'
import UserLogin                from './components/UserLogin'
import ProfileContainer         from './containers/ProfileContainer'
import LessonContainer          from './containers/LessonContainer'
import LessonsContainer         from './containers/LessonsContainer'
import Menu                     from './containers/Menu'
import Board                    from './Board'
import Splash                   from './Splash'
import { fetchLessons }         from './actions'
import './App.css';

console.log("%c ♞ ", "color:#fc0;font-size:48px;text-shadow:0px 5px 3px #A45,-5px 5px 3px #945,-5px 0px 3px #645,-5px -5px 3px #534,0px -5px 3px #645,5px -5px 3px #945,5px 0px 3px #A45,5px 5px 3px #E45")

class App extends Component {

  componentDidMount = () => {
    this.props.fetchLessons()
  }

  render(){
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.props.currentUser
        ? <Component {...props}/>
        : <Redirect to="/login" />
      )}/>
    )

    return (
      <BrowserRouter>
        <Menu />

        <Route path="/signup"         render={(props) => <UserSignup {...props} user={this.props.currentUser} />} />
        <Route path="/login"          render={(props) => <UserLogin {...props} user={this.props.currentUser} />} />
        <Route path="/logout"         component={UserLogin} />
        <Route path="/play"           component={Board} />
        <Route exact path="/"         component={Splash} />

      {/* everything below must be changed back to a PrivateRoute for login to work!! */}

        <PrivateRoute path="/home"           component={ProfileContainer} />
        <PrivateRoute exact path="/lessons"  component={LessonsContainer} />
        <PrivateRoute path="/lessons/:id"    component={LessonContainer} />

      {/* test routes */}

        <Route path="/board"    component={Board} />

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
