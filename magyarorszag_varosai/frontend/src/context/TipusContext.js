import {useState,useEffect,createContext} from 'react';

const TipusContext=createContext();

export const TipusProvider=({children})=>{
    const[jogallasok,setJogallasok]=useState([]);
    const[kivalasztottJogallas,setKivalasztottJogallas]=useState("");
    const[jogallasTelepulesek,setJogallasTelepulesek]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/api/telepulestipus')
        .then(res=>res.json())
        .then(jogallasok=>setJogallasok(jogallasok))
        .catch(err=>console.log(err));
    },[]);

    useEffect(()=>{
        if(kivalasztottJogallas!==""){
            fetch(`http://localhost:8000/api/telepulestipus/tipus/${kivalasztottJogallas}`)
            .then(res=>res.json())
            .then(telepulesek=>setJogallasTelepulesek(telepulesek))
            .catch(err=>console.log(err));
        }

    },[kivalasztottJogallas]);




    return <TipusContext.Provider value={{
        jogallasok,
        jogallasTelepulesek,
        kivalasztottJogallas,
        setKivalasztottJogallas
    }}>{children}</TipusContext.Provider>
}

export default TipusContext;