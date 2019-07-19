import React, { Component}      from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { connect }              from "react-redux";
import UserSignup               from './components/UserSignup'
import UserLogin                from './components/UserLogin'
import ProfileContainer         from './containers/ProfileContainer'
import Menu                     from './containers/Menu'
import './App.css';

console.log("%c ♞ ", "color:#fc0;font-size:48px;text-shadow:-5px -5px 3px #458,0px -5px 3px #458,5px -5px 3px #458,5px 0px 3px #458,5px 5px 3px #458,0px 5px 3px #458,-5px 5px 3px #458,-5px 0px 3px #458;")


class App extends Component {

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
        {/*<Link to="/protected/">Protected Page</Link>*/}

        <Route path="/signup/" component={UserSignup} />
        <Route path="/login/" component={UserLogin} />
        <Route path="/logout/" component={UserLogin} />
        <PrivateRoute path="/home/" component={ProfileContainer} />
      </BrowserRouter>
    );
  }
}

const msp = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(msp)(App);
