import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render as renderDom } from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import categorysReducer from './reducer/category';
import './style/main.scss';

const middleware = {};

const store = createStore(categorysReducer, composeWithDevTools(applyMiddleware(...middleware)));

const root = document.createElement('div');
document.body.appendChild(root);

renderDom(<Provider store={store}><App /></Provider>, root);
