// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Styles
import './index.css';
// Socket
import './socket';

import List from './components/List';

// Load Root DOM
const app = ReactDOM.createRoot(
  document.getElementById('app')
);

app.render(
    <Provider store={store}>
        <h1>League Champion</h1>
        <List />
    </Provider>
);