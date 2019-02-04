import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation LogoTitle="Sankalp"/>, document.getElementById('root'));

serviceWorker.unregister();
