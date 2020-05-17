import {combineReducers} from 'redux';

// Reducer Imports
import auth from './authReducer';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import connectReducer from './connectReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userInfo'],
  version: 1.0,
};

const rootReducer = combineReducers({
  // Reducers
  auth: persistReducer(authPersistConfig, auth),
  connect: connectReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
