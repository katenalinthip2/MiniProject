import React, { useState } from 'react';
import './App.css';
// import { Link } from 'react-router-dom';
import firebase from "./firebase/config";

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
        props.history.push("/");
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  const onSignUp = (event) => {
    event.preventDefault();
    // console.log("test");
    firebase
      .auth()
      .createUserWithEmailAndPassword(datauser.email, datauser.password)
      .then(response => {
        // props.history.push("/");
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  return (

    <form className='App-header2' >
      <h1> LOGIN </h1>
      <div className='from-group'>

        <label className='App-Log'> Name </label>
        <input type='email' className='form-control' name="email" onChange={(e) => setDataUser({ ...datauser, email: e.target.value })} placeholder="Email" />

        <label className='App-Log'> Password </label>
        <input type='password' className='form-control' name="password" onChange={(e) => setDataUser({ ...datauser, password: e.target.value })} placeholder="Password" />
        <p> {message}</p>
        <button class="btn btn-success" onClick={onSubmit}>Sign In</button>
        <button class="btn btn-light" onClick={onSignUp}>Sign Up</button>
        {/* 
        <Link className='nav-link' to='/'> Home </Link> */}
      </div>
    </form >

  );
}

export default Login;