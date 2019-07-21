export default function reducer(state = {

  currentUser: null,
  currentLesson: null,
  allLessons: [],
  lessonContent: []

}, action) {
  switch (action.type) {

    case "CREATE_USER":
      console.log("creatin a user, boss")
      return {
        ...state,
        currentUser: action.payload
      }

    case "LOG_OUT":
      console.log("removin a user, boss")
      return {
        ...state,
        currentUser: null
      }

    case "FETCH_LESSONS":
      console.log("fetchin the lessons, boss")
      return {
        ...state,
        allLessons: action.payload
      }

    case "SET_CURRENT_LESSON":
      console.log("settin the lesson, boss")
      return {
        ...state,
        currentLesson: action.payload
      }

    case "FETCH_CONTENT":
      console.log("fetchin the content, boss")
      return {
        ...state,
        lessonContent: action.payload
      }

    default:
      return state;
  }
};
