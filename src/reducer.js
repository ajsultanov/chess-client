export default function reducer(state = {

  currentUser: null,
  currentLesson: 1,
  allLessons: [],
  lessonContent: []

}, action) {
  switch (action.type) {

    /* sets currentUser on login or signup */
    case "CREATE_USER":
      console.log("creatin a user, boss")
      return {
        ...state,
        currentUser: action.payload
      }

    /* removes currentUser on logout */
    case "LOG_OUT":
      console.log("removin a user, boss")
      return {
        ...state,
        currentUser: null
      }

    /* gets lessons, first thing when app loads */
    case "FETCH_LESSONS":
      console.log("fetchin the lessons, boss")
      return {
        ...state,
        allLessons: action.payload
      }

    /* sets currentLesson when an individual lesson is opened
    [!] i want to set this for the currentUser as well but dont know how... */
    case "SET_CURRENT_LESSON":
      console.log("settin the lesson, boss")
      return {
        ...state,
        currentLesson: action.payload,
      }

    /* gets slide components when an individual lesson is opened
    [!] i think im having an issue here with async stuff... */
    case "FETCH_CONTENT":
      console.log("fetchin the content, boss")
      return {
        ...state,
        lessonContent: [...state.lessonContent, action.payload]
      }

    default:
      return state;
  }
};
