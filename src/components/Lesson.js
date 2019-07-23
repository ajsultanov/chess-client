/* ^ LessonContainer ^ */
/* this component is the lesson page itself, containing slides (cmp) and puzzles (cmp) */

import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import Carousel             from './Carousel';

class Lesson extends Component {

  styles = {
    padding:"5px",
    margin:"5px",
    border:"2px solid limegreen",
  }

  render() {
    if (!this.props.lesson) {
      return <div />
    } else {
      return (
        <div>
          <Link to="/lessons/">Back to lessons</Link>
          <div style={this.styles}>
            <div>{this.props.lesson.title}&nbsp; - &nbsp;
            {this.props.lesson.description}</div>
            <Carousel lesson={this.props.lesson}/>
          </div>
        </div>
      )
    }
  }
}

export default Lesson
