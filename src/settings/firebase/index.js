
const firebaseConfig = {
  apiKey: "AIzaSyAvcV_EpgXh43F6NHDSAqvTyo_ii7nltO4",
  authDomain: "fetch-fa6c9.firebaseapp.com",
  databaseURL: "https://fetch-fa6c9.firebaseio.com",
  projectId: "fetch-fa6c9",
  storageBucket: "fetch-fa6c9.appspot.com",
  messagingSenderId: "109753455164"
};

const googleConfig = {
  apiKey: 'AIzaSyDXxVaYUsyLRtok2GdPxTmDeogOZpQcVMo' //
};

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false, // enable/disable updating of profile on login
  profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
  // presence: 'presence', // list currently online users under "presence" path in RTDB
  // sessions: null, // Skip storing of sessions
  // enableLogging: true // enable/disable Firebase Database Logging
  }

export { firebaseConfig, googleConfig, rrfConfig }