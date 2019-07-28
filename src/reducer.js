export default function reducer(state = {

  currentUser: null,
  allLessons: [],
  lesson: {},
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

    /* sets currentLesson when an individual lesson is opened */
    case "SET_CURRENT_LESSON":
      console.log("settin the lesson on the user, boss")
      return {
        ...state,
        currentUser: action.payload,
      }

    case "SET_LESSON":
      console.log("settin the lesson OBJECT, boss")
      return {
        ...state,
        lesson: action.payload,
      }

    /* gets slide components when an individual lesson is opened
    [!] i think im having an issue here with async stuff... */
    case "FETCH_CONTENT":
      console.log("fetchin the content, boss")
      return {
        ...state,
        lessonContent: action.payload
      }

    case "CLEAR_CONTENT":
      console.log("clearin the content, boss")
      return {
        ...state,
        lessonContent: []
      }

    case "ADD_XP":
      console.log("addin the xp, boss -- ", action.payload)
      return {
        ...state,
        currentLesson: state.currentLesson + 1,
        currentUser: action.payload
      }

    case "MARK_COMPLETE":
      console.log("completin the lesson, boss -- ", action.payload)
      console.log("marking complete", state.currentUser);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          user_lessons: action.payload
        }
      }

    default:
      return state;
  }
};
