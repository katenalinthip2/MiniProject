
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDcBpE1SygJcrXDmngTXW2BT8vCtPUTB0s",
  authDomain: "loginminipro.firebaseapp.com",
  databaseURL: "https://loginminipro.firebaseio.com",
  projectId: "loginminipro",
  storageBucket: "loginminipro.appspot.com",
  messagingSenderId: "951579270707",
  appId: "1:951579270707:web:3dea7e69aeb1e2129d8d46",
  measurementId: "G-62CS4P3CG4"
};

const config = firebase.initializeApp(firebaseConfig);

export default config

