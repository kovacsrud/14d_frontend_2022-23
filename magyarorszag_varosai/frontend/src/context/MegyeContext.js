import { useState,useEffect,createContext } from "react";

const MegyeContext=createContext();

export const MegyeProvider=({children})=>{
    const[megyek,setMegyek]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8000/api/megyek')
        .then(res=>res.json())
        .then(megyek=>setMegyek(megyek))
        .catch(err=>console.log(err));
    },[]);



    return <MegyeContext.Provider value={{megyek}}>{children}</MegyeContext.Provider>
}

export default MegyeContext;