import React, {useState, useEffect} from 'react';

import {useHistory} from 'react-router-dom';

// custom hook to reset page to top
const useHistoryLog = ( key = 'routeVal', initialState = null) => {

    const [pathLog, setPathLog] = useState( () => {
        const storedVal = localStorage.getItem(key);

        return storedVal ?? initialState;
    
    }); 

    const [clearedStatus, setClearedStatus] = useState(false);

    
    let historyPath = useHistory().location.pathname;

    useEffect( () => {
        console.log(" >> history Hook >>>>>> ", historyPath);
        localStorage.setItem( key, pathLog);

    }, [key, pathLog]);

    
    const clearLog = () => {
        console.log("CLEARED")
        console.log(' key is ', key);
        localStorage.removeItem(key);
        setClearedStatus(true);
        setPathLog("RESET");
    }


    return [pathLog, setPathLog, clearLog, clearedStatus];

}

export default useHistoryLog;