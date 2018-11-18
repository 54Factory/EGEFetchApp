import { SubmissionError } from 'redux-form';

export const login = (creds) => {
  return async (dispatch, getState, { getFirebase }) => {
  
    const firebase = getFirebase();
    try {
      let userLoggingIn = await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)

      console.log(userLoggingIn);
      
      
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
}

export const signOutUser = (state) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  }
}


