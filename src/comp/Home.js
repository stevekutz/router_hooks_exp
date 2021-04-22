import React, {useState, useEffect, useRef} from 'react';
import FooterNav from './FooterNav';

import {TextJunk} from '../data/content';
import {Link} from 'react-router-dom';

const Home = (props) => {
    
    props.useScrollToTop();
    // props.useHistoryLog();

    const [value, setValue, clearValue, clearedStatus] = props.useHistoryLog(
        "routeVal",
        "Hello World!!!"
    );

    console.log('clearedStatus ', clearedStatus);
    
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
    //     setValue(" RESET world !");
    //     console.log("useEffect called ")
    // }, []);

    return (
        <div>
            <h1> Home </h1>
            <p> {TextJunk} </p>
            <p> History:  </p>

                  <h1> Value: {value}</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => clearValue()}>Clear</button>
        
            <FooterNav />


        </div>
    )
}

export default Home;


    // <button onClick = {addHistory}>
    
    // Add to history
    // </button>