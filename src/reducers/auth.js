const initialState = {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        userID: action.uid,
        displayName: action.displayName,
        email: action.email
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

export default authReducer
