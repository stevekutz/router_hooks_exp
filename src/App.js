// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from 'react';

import Home from './comp/Home';
import About from './comp/About';
import Other from './comp/Other';
import Paths from './comp/Paths';

import {
    BrowserRouter as Router, Switch, Route, 
    useHistory, useLocation

} from 'react-router-dom';

import useScrollToTop from './customHooks/useScrollToTop';
import useHistoryLog from './customHooks/useHistoryLog';

// // custom hook to reset page to top
// const useScrollToTop = () => {
//     const locationHook = useLocation();

//     useEffect( () => {
//         console.log(" >> locationHook >>>>>> ", locationHook);
//         window.scrollTo({top: 0});


//     }, [locationHook]);

//     return locationHook;


// }




function App() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route  exact path = '/' > <Home useScrollToTop = {useScrollToTop} useHistoryLog = {useHistoryLog}/> </Route>
                    <Route path = '/about'> <About useScrollToTop = {useScrollToTop} /> </Route>
                    <Route path = '/other'> <Other useScrollToTop = {useScrollToTop} /> </Route>
                    <Route path = '/paths'> <Paths useScrollToTop = {useScrollToTop} /> </Route>
                
                </Switch>
            </Router>



        </div>
    );
}

export default App;
