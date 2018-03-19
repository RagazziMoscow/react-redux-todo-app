import { render } from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import todoApp from './reducers';

import App from './components/App';

const store = createStore(todoApp, applyMiddleware(logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
