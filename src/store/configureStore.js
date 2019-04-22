import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const configureStore = () => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware()
    return {
      ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger))),
      runSaga: sagaMiddleware.run,
    }
}

export default configureStore;
