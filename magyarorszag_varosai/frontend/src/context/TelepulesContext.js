import {useState,useEffect,createContext} from 'react';

const TelepulesContext=createContext();

export const TelepulesProvider=({children})=>{
    const[telepulesnevek,setTelepulesNevek]=useState([]);
    const [selectedTelepules,setSelectedTelepules]=useState("");
    const [telepules,setTelepules]=useState({});

    useEffect(()=>{
        fetch(`http://localhost:8000/api/telepulesek/telepulesnev/${selectedTelepules}`)
        .then(res=>res.json())
        .then(adat=>setTelepules(adat))
        .catch(err=>console.log(err));
    },[selectedTelepules]);

    useEffect(()=>{
        fetch('http://localhost:8000/api/telepulesek')
        .then(res=>res.json())
        .then(adat=>setTelepulesNevek(adat))
        .catch(err=>console.log(err))
    },[]);


    return <TelepulesContext.Provider value={{
        telepulesnevek,
        telepules,
        selectedTelepules,
        setSelectedTelepules

    }}>
                {children}
            </TelepulesContext.Provider>
}

export default TelepulesContext;