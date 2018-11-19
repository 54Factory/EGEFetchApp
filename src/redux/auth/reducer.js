import { LOGIN, SIGN_OUT_USER, LOGGED_IN_USER } from './authConstants'
import { createReducer } from '../reduxHelper';

const initialState = {
  currentUser: {},
  authenticated: false
}

export const login = (state, user) => {
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  return {
    ...state,
    authenticated: true,
    currentUser: user.creds.email
  }

}

export const loggedInUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.user
  }
}

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  }
}


export default createReducer(initialState, {
  [LOGIN]: login,
  [LOGGED_IN_USER]: loggedInUser,
  [SIGN_OUT_USER]: signOutUser
})
// import actions from './actions';
// import { getToken } from '../../helpers/utility';


// const initState = { idToken: null };
// const token = getToken().get('idToken');
// const clearToken = localStorage.removeItem('id_token');

// export default function authReducer(state = initState, action) {
//   switch (action.type) {
//     case actions.LOGIN_REQUEST:
//       return { ...state, idToken: action.token };
//     case actions.LOGIN_SUCCESS:
//       return { ...state, idToken: action.token };
//     case actions.LOGIN_ERROR:
//       return {};
//     case actions.LOGOUT:
//       return {clearToken};
//     case actions.CHECK_AUTHORIZATION:
//       if (token) {
//        return {...state, idToken: action.token }
//       }
//       return { state }
//     default:
//       return state;
//   }
// }

