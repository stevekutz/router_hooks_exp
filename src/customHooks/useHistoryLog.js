import React, {useState, useEffect} from 'react';

import {useHistory} from 'react-router-dom';

// custom hook to reset page to top
const useHistoryLog = () => {

    const [pathLog, setPathLog] = useState([]); 

    const historyHook = useHistory();

    useEffect( () => {
        console.log(" >> history Hook >>>>>> ", historyHook);
        setPathLog(historyHook);

    }, [historyHook]);

    
    return pathLog;

}

export default useHistoryLog;