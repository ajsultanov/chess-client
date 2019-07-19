export default function reducer(state = {

  currentUser: null,
  currentLesson: null,
  allLessons: []

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

    default:
      return state;
  }
};
