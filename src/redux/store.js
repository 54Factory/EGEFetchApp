import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form'
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { rrfConfig, firebaseConfig } from '../settings/firebase'
import {reducer as toastrReducer} from 'react-redux-toastr'
import authReducer from './auth/reducer';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import appReducer from './app/reducer';


const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk.withExtraArgument({getFirebase, getFirestore}), routeMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

export default function configureStore(initialState, history) {
  // Initialize Firebase instance
  firebase.initializeApp(firebaseConfig)
  // Initialize Firestore with timeshot settings
  firebase.firestore().settings({ timestampsInSnapshots: true })
    
const storeEnhancers = [middlewareEnhancer];

const composeEnhancers = composeWithDevTools(
  ...storeEnhancers, 
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
  );

const store = createStore(
  combineReducers({
    ...reducers, 
    router: routerReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    auth: authReducer,
    toastr: toastrReducer,
    app: appReducer
  }),
    composeEnhancers
  );  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
export { history }


// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import createHistory from 'history/createBrowserHistory';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
// import thunk from 'redux-thunk';
// import reducers from '../redux/reducers';

// const history = createHistory();
// const routeMiddleware = routerMiddleware(history);
// const middlewares = [thunk, routeMiddleware];

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer,
//   }),
//   composeEnhancers(applyMiddleware(...middlewares))
// );

// export { store, history };




