import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

export const ShowNoNavBar = ({children}) => {
    const location = useLocation();
    const [noNavBar, setNoNavBar] = useState(false);
    useEffect(()=>{
        if(location.pathname === '/SignUp'){
            setNoNavBar(false)
        }else{
            setNoNavBar(true)
        }
    }, [location])
  return (
    <div>{noNavBar && children}</div>
  )
}
export default ShowNoNavBar;
