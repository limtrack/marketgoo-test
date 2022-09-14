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
// Components
import Players from './components/Players';

// Root component
const Root = () => {
    return (
      <Provider store={store}>
       <h1>League Champion</h1>
       <Players />
     </Provider>
    )
}

// Render root
const app = document.getElementById('app');
ReactDOM.render( <Root />, app );