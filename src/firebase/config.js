import 'firebase/storage';
import 'firebase/auth'
import firebase from 'firebase/app'
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
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth();
export {firebase, storage, auth as default}