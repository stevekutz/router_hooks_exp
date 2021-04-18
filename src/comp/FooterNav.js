import React from 'react';
import {Link} from 'react-router-dom';

const FooterNav = () => {
    
    return (
        <div style = {{margin: '10px'}}>
            <Link  style = {{margin: '10px'}} to = '/'> Return to Home </Link>
            <Link  style = {{margin: '10px'}} to = '/about'> Switch to About Page </Link>
            <Link style = {{margin: '10px'}} to = '/other'> Switch to Other </Link>
            <Link style = {{margin: '10px'}} to = '/paths'> Switch to Paths </Link>
        </div>
    
    )
}

export default FooterNav;