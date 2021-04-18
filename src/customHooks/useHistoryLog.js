import React, {useState, useEffect} from 'react';

import {useHistory} from 'react-router-dom';

// custom hook to reset page to top
const useHistoryLog = ( key = 'routeVal', initialState = null) => {

    const [pathLog, setPathLog] = useState( () => {
        const storedVal = localStorage.getItem(key);

        return storedVal ?? initialState;
    
    }); 

    

    useEffect( () => {
        // console.log(" >> history Hook >>>>>> ", historyHook);
        localStorage.setItem( key, pathLog);

    }, [key, pathLog]);

    
    const clearLog = () => localStorage.removeItem(key);


    return [pathLog, setPathLog, clearLog];

}

export default useHistoryLog;