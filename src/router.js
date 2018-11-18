import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

// const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/signin',
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );
const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/'}
          component={asyncComponent(() => import('./containers/Page/splash'))}
        />
        <Route
          exact
          path={'/signin'}
          component={asyncComponent(() => import('./containers/Page/signin'))}
        />
        <Route
          path="/dashboard"
          component={App}
          //isLoggedIn={isLoggedIn}
        />
        {/* <RestrictedRoute
          path="/dashboard"
          component={App}
          isLoggedIn={isLoggedIn}
        /> */}
      </div>
    </ConnectedRouter>
  );
};

export default (PublicRoutes);
