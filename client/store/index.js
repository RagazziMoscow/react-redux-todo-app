import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import todoApp from './../reducers';

const store = createStore(todoApp, {todos: [], filter: 'SHOW_ALL'}, applyMiddleware(thunk, logger));

export default store;