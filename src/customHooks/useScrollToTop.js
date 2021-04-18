import React, {useEffect} from 'react';

import {useLocation} from 'react-router-dom';

// custom hook to reset page to top
const useScrollToTop = () => {
    const locationHook = useLocation();

    useEffect( () => {
        console.log(" >> locationHook >>>>>> ", locationHook);
        window.scrollTo({top: 0});


    }, [locationHook]);

    // return locationHook;


}

export default useScrollToTop;