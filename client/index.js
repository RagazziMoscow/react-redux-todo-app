import { render } from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import todoApp from './reducers';

import App from './components/App';
import { fetchTodos } from './actions';

const store = createStore(todoApp, {todos: [], filter: 'SHOW_ALL'}, applyMiddleware(thunk, logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
