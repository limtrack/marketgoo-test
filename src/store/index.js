// redux
import { configureStore } from '@reduxjs/toolkit';
// reducers
import rootReducer from './root-reducers';
// saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Saga
const sagaMiddleware = createSagaMiddleware();
// Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware),
});
// Run saga
sagaMiddleware.run(rootSaga);

export default store
