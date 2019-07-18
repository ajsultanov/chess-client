import React                    from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect }              from "react-redux";
import UserSignup               from './components/UserSignup'
import UserLogin                from './components/UserLogin'
import ProfileContainer         from './containers/ProfileContainer'
import Menu                     from './containers/Menu'
import './App.css';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={() => (
//     this.props.currentUser ?
//       <Component />
//       :
//       <Redirect to='/login' />
//   )} />
// )


function App() {
  console.log("%c ♞ ", "color:#fc0;font-size:48px;text-shadow:-5px -5px 3px #458,0px -5px 3px #458,5px -5px 3px #458,5px 0px 3px #458,5px 5px 3px #458,0px 5px 3px #458,-5px 5px 3px #458,-5px 0px 3px #458;")

  return (
    <BrowserRouter>
      <Menu />
      <Route path="/signup/" component={UserSignup} />
      <Route path="/login/" component={UserLogin} />
      <Route path="/logout/" component={UserLogin} />
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentLesson: state.currentLesson
  }
}

console.log(this);

export default connect(mapStateToProps)(App);
