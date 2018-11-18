import { SubmissionError } from 'redux-form';
// const actions = {
//   CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
//   LOGIN_REQUEST: 'LOGIN_REQUEST',
//   LOGOUT: 'LOGOUT',
//   LOGIN_SUCCESS: 'LOGIN_SUCCESS',
//   LOGIN_ERROR: 'LOGIN_ERROR',
//   checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
//   login: () => ({
//     type: actions.LOGIN_REQUEST
//   }),
//   logout: () => ({
//     type: actions.LOGOUT
//   })
// };
// export default actions;

export const login = (creds) => {
  return async (dispatch, getState, { getFirebase }) => {
  
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
}


export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  }
}


