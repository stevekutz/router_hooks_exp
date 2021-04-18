import React from 'react';
import FooterNav from './FooterNav';

import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const Home = (props) => {
    
    props.useScrollToTop();
    console.log('?????  ', props);

    return (
        <div>
            <h1> Home </h1>
            <p> {TextJunk} </p>
            <p> History:  {props.historyHook} </p>
        
            <FooterNav />
        </div>
    )
}

export default Home;