/* ^ App ^ */
/* this component is a page that shows the profile (cmp), a link to the current lesson (cmp), and a link to the allLessons page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Profile              from '../components/Profile';
import { Link }             from 'react-router-dom'

class ProfileContainer extends Component {


  ok = "https://images.unsplash.com/photo-1505461296292-7d67beed10a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  twok = "https://images.unsplash.com/photo-1529699310859-b163e33e4556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1122&q=80"

  styles = {
    width:"796px",
    padding:"10px",
    border:"2px solid sienna",
  }
  styles2 = {
    padding:"5px",
    margin:"5px",
    height:"100px",
    color:"white",
    border:"2px solid blue",
    backgroundImage:`url(${this.twok})`,
    backgroundSize:"100%",
    backgroundPosition:"50% 50%",
    boxShadow:"inset 0px 0px 20px black"
  }
  styles3 = {
    padding:"5px",
    margin:"5px",
    height:"100px",
    color:"white",
    border:"2px solid green",
    backgroundImage:`url(${this.ok})`,
    backgroundSize:"100%",
    backgroundPosition:"25% 60%",
    boxShadow:"inset 0px 0px 20px black"
  }

  render() {
    return (
      <div style={this.styles}>
        {
          this.props.currentUser ?
            <div>
              <Profile
                username={this.props.currentUser.username}
                xp={this.props.currentUser.xp}
              />

              <Link to={`/lessons/${this.props.currentUser.current_lesson}`}>
                <div style={this.styles3}>
                  Current Lesson
                </div>
              </Link>

              <Link to="/lessons/">
                <div style={this.styles2}>
                  Link to All Lessons
                </div>
              </Link>
            </div>
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ProfileContainer)
