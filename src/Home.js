import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <p> Welcome to My Collections</p>
            
            <Link className='home-button' to='/Login'> Get Start </Link>
        </div>
    )
}

export default Home;