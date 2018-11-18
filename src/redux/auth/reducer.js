import actions from './actions';
import { getToken } from '../../helpers/utility';


const initState = { idToken: null };
const token = getToken().get('idToken');
const clearToken = localStorage.removeItem('id_token');

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return { ...state, idToken: action.token };
    case actions.LOGIN_SUCCESS:
      return { ...state, idToken: action.token };
    case actions.LOGIN_ERROR:
      return {};
    case actions.LOGOUT:
      return {clearToken};
    case actions.CHECK_AUTHORIZATION:
      if (token) {
       return {...state, idToken: action.token }
      }
      return { state }
    default:
      return state;
  }
}

