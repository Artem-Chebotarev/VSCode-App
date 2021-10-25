import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Loader} from '../components/common/Loader/Loader';
import {persistor, store} from './store';

interface ReduxProviderProps {
  children?: React.ReactChild | React.ReactNode;
}

export const ReduxProvider: FC<ReduxProviderProps> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        {children}
      </PersistGate>
    </Provider>
  );
};
