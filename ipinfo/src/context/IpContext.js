import {createContext, useEffect,useState} from 'react';

const IpContext=createContext();

export const IpProvider=({children})=>{
    const URL="https://ipapi.co/json/";
    const[ipInfo,setIpInfo]=useState({});

    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(adat=>setIpInfo(adat))
        .catch(err=>console.log(err));
    },[])


    return <IpContext.Provider value={{ipInfo}}>{children}</IpContext.Provider>
}
export default IpContext;