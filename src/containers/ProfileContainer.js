/* ^ App ^ */
/* this component is a page that shows the profile (cmp), a link to the current lesson (cmp), and a link to the allLessons page */

import React, { Component } from 'react';
import Profile              from '../components/Profile';
import CurrentLesson        from '../components/CurrentLesson';
import { Link }             from 'react-router-dom'

class ProfileContainer extends Component {


  ok = "https://images.unsplash.com/photo-1505461296292-7d67beed10a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"

  styles = {
    width:"796px",
    padding:"10px",
    border:"2px solid sienna",
  }
  styles2 = {
    padding:"5px",
    margin:"5px",
    height:"100px",
    border:"2px solid blue",
    backgroundImage:`url(${this.ok})`,
    backgroundSize:"100%",
    backgroundPosition:"50% 50%"
  }


  render() {

    return (
      <div style={this.styles}>
        <Profile />

        <CurrentLesson />

        <Link to="/lessons/">
          <div style={this.styles2}>
            Link to All Lessons
          </div>
        </Link>
      </div>
    );
  }
}

export default ProfileContainer
