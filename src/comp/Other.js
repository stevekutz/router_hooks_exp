import React from 'react';
import FooterNav from './FooterNav';
import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const Other = () => {
    
    return (
        <div>
            <h1> Other Page </h1>
            <p style = {{color: 'pink'}} > {TextJunk} </p>
        
            <FooterNav />
        
        </div>
    )
}

export default Other;