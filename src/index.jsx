import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index';
import { Provider } from 'react-redux';
import store from './app/store/store';
import './app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);