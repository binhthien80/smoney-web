import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
    return {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
      runSaga: sagaMiddleware.run,
    }
}

export default configureStore;
