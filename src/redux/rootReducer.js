import { combineReducers } from 'redux'
import {reducer as FormReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import authReducer from './auth/reducer';


const rootReducer = combineReducers({
  form: FormReducer,
  auth: authReducer,
  toastr: toastrReducer
})

export default rootReducer