import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
    return (

        <div class='App-Log'>
            <div className="nav-tabs bg-dark" style={{ display: "flex", flexDirection: 'row' }}>
                <Link className='nav-link' to='/'> Home </Link>
                <Link className='nav-link' to='/Login'> Login </Link>
            </div>
        </div>
    )
}

export default Nav;
