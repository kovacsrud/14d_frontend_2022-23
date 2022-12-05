import {useState,useEffect,createContext} from 'react';

const TelepulesContext=createContext();

export const TelepulesProvider=({children})=>{
    const[telepulesnevek,setTelepulesNevek]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/api/telepulesek')
        .then(res=>res.json())
        .then(adat=>setTelepulesNevek(adat))
        .catch(err=>console.log(err))
    },[]);


    return <TelepulesContext.Provider value={{telepulesnevek}}>
                {children}
            </TelepulesContext.Provider>
}

export default TelepulesContext;