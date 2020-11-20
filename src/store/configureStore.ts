import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './rootEpic';
import { rootReducer } from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    enhancer(applyMiddleware(epicMiddleware))
  );

  // @ts-ignore
  epicMiddleware.run(rootEpic);

  return store;
}
