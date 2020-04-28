import React, { useState } from 'react';
import './App.css';
// import { Link } from 'react-router-dom';
import firebase from "./firebase/config";
import './App.css';

const Login = (props) => {

  const [datauser, setDataUser] = useState({
    email: "",
    password: ""
  })

  const [message, setMessage] = useState('')

  // useEffect = () => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       this.props.history.push('/')
  //     }
  //   });
  // }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("test");
    firebase
      .auth()
      .signInWithEmailAndPassword(datauser.email, datauser.password)
      .then(response => {
        props.history.push("/Collects");
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  const onSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(datauser.email, datauser.password)
      .then(response => {
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  return (

    <form className='App-header2' >
      <p className='Log'> SIGN IN or SIGN UP </p>
      <div className='from-group'>

        <label className='App-Log'> Email </label>
        <input style={{width: 400}} type='email' className='form-control' name="email"
          onChange={(e) => setDataUser({ ...datauser, email: e.target.value })} placeholder="Email" />

        <label className='App-Log'> Password </label>
        <input style={{width: 400}} type='password' className='form-control' name="password"
          onChange={(e) => setDataUser({ ...datauser, password: e.target.value })} placeholder="Password" />
        <p> {message}</p>
        <div className='container'> 
        <button className='Sn'  onClick={onSubmit}>Sign In</button>
        <button className='Su'  onClick={onSignUp}>Sign Up</button>
        </div>
      </div>
    </form >

  );
}

export default Login;