import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark" >
                <li className='nav-item'>
                 <Link className='nav-link' to='/'> Home </Link>
                </li>

                <li className='nav-item'>
                 <Link className='nav-link' to='/Login'> Login </Link>
                </li>

            </ul>
           
        </div>
    )
}

export default Nav;