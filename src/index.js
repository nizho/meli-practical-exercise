import React from 'react';
import ReactDOM from 'react-dom';
import './styles/mainStyles.scss';
import Header from './components/Header.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));


serviceWorker.unregister();
