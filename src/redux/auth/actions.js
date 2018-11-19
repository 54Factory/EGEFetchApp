import { LOGGED_IN_USER } from './authConstants'
import { SubmissionError } from 'redux-form';

export const login = (creds) => {
  return async (dispatch, getState, { getFirebase }) => {
  
    const firebase = getFirebase();
    try {
      let user = await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
        await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
          dispatch({type: LOGGED_IN_USER, payload: {user}})
          console.log(user);
        })
      
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
}

export const signOutUser = () => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase()

  try {
      await firebase.auth().signOut();
   
  } catch (e) {
      console.log(e);
  }
}
}


export const socialLogin = (selectedProvider) =>
async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase()
  const firestore = getFirestore()
  try {
    let user = await firebase.login({
      provider: selectedProvider,
      type: 'popup'
    })
    if (user.additionalUserInfo.isNewUser) {
      await firestore.set(`users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl,
        createdAt: firestore.FieldValue.serverTimestamp()
      })
    }
    dispatch({type: LOGGED_IN_USER, payload: {user}})
    console.log('====================================');
    console.log(user);
    console.log('====================================');
  } catch (error) {
    console.log(error)
  }
}

