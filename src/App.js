import React                    from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import UserSignup               from './components/UserSignup'
import UserLogin                from './components/UserLogin'
import Menu                     from './containers/Menu'
import './App.css';

function App() {
  console.log("%c ♞ ", "color:yellow;font-size:24px;text-shadow:3px 3px 2px black,-3px 3px 2px black,3px -3px 2px black,-3px -3px 2px black;")

  return (
    <BrowserRouter>
      <div className="My-App">
        <Menu />
        <Route path="/signup/" component={UserSignup} />
        <Route path="/login/" component={UserLogin} />
      </div>
    </BrowserRouter>
  );
}

export default App;
