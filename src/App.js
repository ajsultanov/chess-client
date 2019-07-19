import React, { Component}      from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect }              from "react-redux";
import UserSignup               from './components/UserSignup'
import UserLogin                from './components/UserLogin'
import ProfileContainer         from './containers/ProfileContainer'
import LessonsContainer         from './containers/LessonsContainer'
import Menu                     from './containers/Menu'
import Lesson                   from './components/Lesson'
import { fetchLessons }         from './actions'
import './App.css';

console.log("%c ♞ ", "color:#fc0;font-size:48px;text-shadow:-5px -5px 3px #458,0px -5px 3px #458,5px -5px 3px #458,5px 0px 3px #458,5px 5px 3px #458,0px 5px 3px #458,-5px 5px 3px #458,-5px 0px 3px #458;")

class App extends Component {

  componentDidMount = () => {
    this.props.fetchLessons()
  }

  render(){
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.props.currentUser
        ? <Component {...props}/>
        : <Redirect to="/login/" />
      )}/>
    )

    return (
      <BrowserRouter>
        <Menu />

        <Route path="/signup/"        component={UserSignup} />
        <Route path="/login/"         component={UserLogin} />
        <Route path="/logout/"        component={UserLogin} />
        <Route path="/home/"          component={ProfileContainer} />
        <Route exact path="/lessons/" component={LessonsContainer} />
        <Route path="/lessons/:id"    component={Lesson} />
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
