import React, {useState, useEffect, useRef} from 'react';
import FooterNav from './FooterNav';

import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const Home = (props) => {
    
    props.useScrollToTop();
    props.useHistoryLog();

    // const [arr, setArr] = useState([]);
    // const [savedArr, setSavedArr] = useState([]);


    // const savedArr = useRef([]);

    // let lengthVal = props.useHistoryLog().length;
    

    // const addHistory = () => {
    //     setArr( (arr) => [...arr, lengthVal])
    //     // savedArr.current = (savedArr.current) => [...savedArr.current, lengthVal];
    //     savedArr.current = savedArr.current.concat([lengthVal]);
    // }
    
    
    // useEffect( () => {
    //     setArr( lengthVal  );
    //     // arr.push(lengthVal);
    //     // console.log('val -> ', arr);
    // },[lengthVal]);

    // console.log('savedArr   ', savedArr);

    return (
        <div>
            <h1> Home </h1>
            <p> {TextJunk} </p>
            <p> History:  </p>

            
        
            <FooterNav />


        </div>
    )
}

export default Home;


    // <button onClick = {addHistory}>
    
    // Add to history
    // </button>