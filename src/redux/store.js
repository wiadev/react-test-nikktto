import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import initialState from './initialState';

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
