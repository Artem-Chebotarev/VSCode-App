import {withAuthenticationRequired} from '@auth0/auth0-react';
import React, {ComponentType, FC} from 'react';
import {Route} from 'react-router-dom';
import {Loader} from '../components/common/Loader/Loader';

interface ProtectedRouteProps {
  // children?: React.ReactChild | React.ReactNode;
  [key: string]: any;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
  const {children, ...args} = props;

  return (
    <Route
      component={withAuthenticationRequired(children as ComponentType, {onRedirecting: () => <Loader />})}
      {...args}
    />
  );
};
