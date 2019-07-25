import 'react-router-dom'

/* creates a user in the database */
/* ^ UserSignup ^ */
const createUser = user => {
  return function(dispatch){
    fetch('http://localhost:3030/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password1,
          current_lesson: null,
          xp: 0
        }
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'CREATE_USER',
        payload: data
      })
    )
  }
}

/* checks user credentials against database, creates a currentUser */
/* ^ UserLogin ^ */
const setUser = user => {
  console.log("setuser--", user);
  return function(dispatch){
    fetch('http://localhost:3030/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'CREATE_USER',
        payload: data
      })
    )
  }
}

/* sets currentUser to null */
/* ^ log out button ^ */
const logout = () => {
  return {type: 'LOG_OUT'}
}

/* gets all lessons from the database */
/* ^ App, LessonsContainer ^ */
const fetchLessons = () => {
  return function(dispatch){
    fetch('http://localhost:3030/lessons')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'FETCH_LESSONS',
        payload: data
      })
    })
  }
}

/* sets the currentLesson */
/* ^ Lesson ^ */
const setCurrentLesson = (user, lesson) => {
  return function(dispatch) {
    fetch(`http://localhost:3030/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        current_lesson: lesson
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'SET_CURRENT_LESSON',
        payload: data
      })
    )
  }
}

/* sets the lesson object */
/* ^ LessonContainer ^ */
const setLesson = lesson => {
  return {
    type: 'SET_LESSON',
    payload: lesson
  }
}

/* gets the slide & puzzle objects associated with a lesson from the database */
/* ^ Lesson ^ */
const getLessonSlides = lessonId => {
  return function(dispatch){
    fetch(`http://localhost:3030/lessons/${lessonId}/slides`)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'FETCH_CONTENT',
        payload: data
      })
    )
  }
}
const getLessonPuzzles = lessonId => {
  return function(dispatch){
    fetch(`http://localhost:3030/lessons/${lessonId}/puzzles`)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'FETCH_CONTENT',
        payload: data
      })
    )
  }
}

const addXP = (user, xp) => {
  console.log(user.id, xp);
  return function(dispatch){
    fetch(`http://localhost:3030/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: user.id,
        xp: xp,
        current_lesson: user.current_lesson,
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'ADD_XP',
        payload: data
      })
    )
  }
}
const markAsComplete = (ul) => {
  console.log("markascomplete:", ul);
  return function(dispatch){
    fetch(`http://localhost:3030/user_lessons/${ul.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: ul.user_id,
        completed: true
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'MARK_COMPLETE',
        payload: data
      })
    )
  }
}



export {
  createUser,
  setUser,
  logout,
  fetchLessons,
  setCurrentLesson,
  setLesson,
  getLessonSlides,
  getLessonPuzzles,
  addXP,
  markAsComplete
}
