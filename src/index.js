import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './App';

const middlewares = [];
if (process.env.NODE_ENV === `development`) { // eslint-disable-line no-undef
    const { logger } = require(`redux-logger`); // eslint-disable-line no-undef

    middlewares.push(logger);
}
const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
