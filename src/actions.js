const createUser = (user) => {
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

const setUser = (user) => {
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

const logout = () => {
  return {type: 'LOG_OUT'}
}

const fetchLessons = () => {
  return function(dispatch){
    fetch('http://localhost:3030/lessons')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'FETCH_LESSONS',
        payload: data
      })
    });
  }
}

const setCurrentLesson = (lesson) => {
  return {
    type: 'SET_CURRENT_LESSON',
    payload: lesson
  }
}

const getLessonContent = lessonId => {
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


export {
  createUser,
  setUser,
  logout,
  fetchLessons,
  setCurrentLesson,
  getLessonContent
}
