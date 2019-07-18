import React      from 'react';
import UserLogin  from './components/UserLogin'
import ShowUsers  from './components/ShowUsers'
import './App.css';

function App() {
  return (
    <div className="My-App">
      <UserLogin />
      <ShowUsers />
    </div>
  );
}

export default App;
