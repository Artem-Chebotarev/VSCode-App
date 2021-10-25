import React, {FC} from 'react';
import {Auth0Provider} from '@auth0/auth0-react';
import {appConfig} from '../config/appConfig';
import {useHistory} from 'react-router';

interface AuthProviderProps {
  children?: React.ReactChild | React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={appConfig.auth0Domain}
      clientId={appConfig.auth0ClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
