/* ^ LessonsContainer ^ */
/* this component is a link on the all lessons page */

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom'

class LessonLink extends Component {

  styles = {
    padding:"5px",
    margin:"5px",
    height:"100px",
    border:"2px solid red",
  }

  render() {
    return (
      <Link to={`/lessons/${this.props.id}`}>
        <div style={this.styles}>
          Welcome to the lesssssson
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(LessonLink)
