import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from 'reducers';
import sagas from 'sagas';

let middlewares;
let store;
const sagaMiddleware = createSagaMiddleware();
const ENV = process.env.NODE_ENV;

const config = {
  key: 'root',
  storage,
  whitelist: ['PERSIST'],
};

const reducer = persistCombineReducers(config, reducers);

if (ENV === 'development') {
  const excludedActions = [
    // 'persist/REHYDRATE',
  ];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => excludedActions.indexOf(action.type) < 0,
  });
  middlewares = applyMiddleware(sagaMiddleware, logger);
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

export const getStore = () => store;

const configureStore = () => {
  // store = createStore(reducers, {}, middlewares);
  // return store;
  const store = createStore(reducer, middlewares);
  sagaMiddleware.run(sagas);
  const persistor = persistStore(store);

  return { persistor, store };
};


export default configureStore;
