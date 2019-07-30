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
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'CREATE_USER',
        payload: data
      })
    )
    .catch(() => {
      console.log("RUH ROH!")
    })
  }
}

/* checks user credentials against database, creates a currentUser */
/* ^ UserLogin ^ */
const setUser = user => {
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
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'CREATE_USER',
        payload: data
      })
    )
    .catch(() => {
      console.log("RUH ROH!!")
    })
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
    .then(handleErrors)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'FETCH_LESSONS',
        payload: data
      })
    })
    .catch(() => {
      console.log("RUH ROH!!!")
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
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'SET_CURRENT_LESSON',
        payload: data
      })
    )
    .catch(() => {
      console.log("RUH ROH!!!!")
    })
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
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'FETCH_CONTENT',
        payload: data
      })
    )
    .catch(() => {
      console.log("RUH ROH!!!!!")
    })
  }
}
const getLessonPuzzles = lessonId => {
  return function(dispatch){
    fetch(`http://localhost:3030/lessons/${lessonId}/puzzles`)
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'FETCH_CONTENT',
        payload: data
      })
    )
    .catch(() => {
      console.log("RUH ROH!!!!!!")
    })
  }
}

const addXP = (user, xp) => {
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
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'ADD_XP',
        payload: data
      })
    )
    .catch(() => {
      console.log("RUH ROH!!!!!!")
    })
  }
}
const markAsComplete = (ul) => {
  console.log(ul);
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
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'MARK_COMPLETE',
        payload: data
      })
    )
    .catch(() => {
      console.log()
    })
  }
}

const handleErrors = response => {
  if (!response.ok) {
    window.alert(`
      ${response.status}: ${response.statusText}...
      Did you type in your password correctly?
      Do you still need to sign up?
    `)

    throw Error(response.status, response.statusText)
  }
  return response
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
