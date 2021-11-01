import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers/rootReducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['darkMode', 'files'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
