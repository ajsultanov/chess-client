export default function manageUsers(state = {
  users: []
}, action) {
  switch (action.type) {

    case 'CREATE_USER':
      console.log("creatin a user boss")



      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;

  }
};
