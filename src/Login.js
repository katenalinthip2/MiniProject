import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import auth from '../firebase'



const Login = () => {
  
  return (

    <form className='App-header2'>
      <h1> LOGIN </h1>
      <div className='from-group'>
        <label className='App-Log'> Name </label>
        <input type='text' className='form-control' />

        <label className='App-Log'> Password </label>
        <input type='password' className='form-control' />

        <Link className='nav-link' to='/'> Home </Link>
      </div>
    </form>

  );
}

export default Login;