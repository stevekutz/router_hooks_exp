import React, {useState, useEffect} from 'react';
import FooterNav from './FooterNav';

import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const Home = (props) => {
    
    const [arr, setArr] = useState([]);

    // props.useHistoryLog();
    let val = props.useHistoryLog().length;

    useEffect( () => {
        setArr(val);
    
    },[arr, val]);

    // console.log('val -> ', val);

    return (
        <div>
            <h1> Home </h1>
            <p> {TextJunk} </p>
            <p> History: {arr}  </p>
        
            <FooterNav />


        </div>
    )
}

export default Home;