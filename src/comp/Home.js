import React from 'react';
import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <h1> Home </h1>
            <p> {TextJunk} </p>
        
            <Link to = '/about'> Switch to About </Link>
        </div>
    )
}

export default Home;