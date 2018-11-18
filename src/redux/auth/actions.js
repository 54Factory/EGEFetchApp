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
    console.log('====================================');
    console.log(user);
    console.log('====================================');
  } catch (error) {
    console.log(error)
  }
}

export const signOutUser = (state) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  }
}


