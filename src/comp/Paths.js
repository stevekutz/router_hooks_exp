import React from 'react';
import FooterNav from './FooterNav';
import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const Paths = () => {
    
    return (
        <div>
            <h1> Paths Page </h1>
            <p style = {{color: 'blue'}} > history of paths:  </p>
        
            <FooterNav />
        </div>
    )
}

export default Paths;