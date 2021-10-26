import {useAuth0} from '@auth0/auth0-react';
import {makeStyles} from '@material-ui/core';
import React, {FC} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ProtectedRoute} from '../../auth/ProtectedRoute';
import {RouteNames, privateRoutes, publicRoutes} from '../../routes';
import {Header} from '../common/Header/Header';
import {Loader} from '../common/Loader/Loader';

export const AppRouter: FC = () => {
  const {isAuthenticated, isLoading} = useAuth0();

  const classes = useStyles();

  if (isLoading) {
    return <Loader />;
  }

  const CodeEditor = () => <div>Code Editor App</div>;

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        {isAuthenticated ? (
          <Switch>
            {privateRoutes.map((route) => (
              <ProtectedRoute path={route.path} exact={route.exact} component={route.component} key={route.path}>
                {CodeEditor}
              </ProtectedRoute>
            ))}
            <Redirect to={RouteNames.HOME} />
          </Switch>
        ) : (
          <Switch>
            {publicRoutes.map((route) => (
              <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
            ))}
            <Redirect to={RouteNames.HOME} />
          </Switch>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));
