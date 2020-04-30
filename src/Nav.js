import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
    return (

        <div >
            <div className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link className='nav-link' to='/'> Home </Link>
                <Link className='nav-link' to='/Collects'> MyCollect </Link>
                <Link className='nav-link' to='/'> Logout </Link>
                
            </div>
        </div>
    )
}

export default Nav;