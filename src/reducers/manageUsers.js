export default function manageUsers(state = {
  currentUser: null
}, action) {
  switch (action.type) {

    case "CREATE_USER":
      console.log("creatin a user, boss")

      return {
        ...state,
        currentUser: action.user
      }

    case "SET_USER":
      console.log("loggin a user, boss")

      return {
        ...state,
        currentUser: action.user
      }

    case "LOG_OUT":
      console.log("removin a user, boss")

      return {
        ...state,
        currentUser: null
      }

    default:
      return state;
  }
};
