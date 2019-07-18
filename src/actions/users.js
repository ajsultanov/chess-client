const createUser = (user) => {
  return {
    type: "CREATE_USER",
    payload: user
  }
}

const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user
  }
}

const logout = () => {
  return {type: "LOG_OUT"}
}

export {
  createUser,
  setUser,
  logout
}
