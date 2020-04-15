import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from 'firebase';
import 'firebase/firestore'
import config from './firebase/config'

if (firebase.apps.length === 0)
   firebase.initializeApp(config);
export const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
