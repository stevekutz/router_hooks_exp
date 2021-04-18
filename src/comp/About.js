import React from 'react';
import FooterNav from './FooterNav';
import {TextJunk} from '../data/content';
import {Link, useLocation, useHistory} from 'react-router-dom';

const About = ({useScrollToTop}) => {
    
    useScrollToTop();

    // let currentPath = useScrollToTop().pathname;
    let locationPath = useLocation().pathname;
    let historyPath = useHistory();

    console.log('+++++>', historyPath);

    return (
        <div>
            <h1> About Page </h1>
            <p> location: current path is:  {locationPath} </p>
            <p> history: current path is:  </p>
            <p style = {{color: 'orange'}} > {TextJunk} </p>
        
            <FooterNav />

        </div>
    )
}

export default About;