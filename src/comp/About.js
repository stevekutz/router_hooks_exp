import React from 'react';
import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const About = () => {
    
    return (
        <div>
            <h1> About Page </h1>
            <p style = {{color: 'orange'}} > {TextJunk} </p>
        
            <Link to = '/'> Return to Home </Link>
        </div>
    )
}

export default About;