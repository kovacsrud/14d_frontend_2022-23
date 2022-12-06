import { useState,useEffect,createContext } from "react";

const MegyeContext=createContext();

export const MegyeProvider=({children})=>{
    const[megyek,setMegyek]=useState([]);
    const[kivalasztottMegye,setKivalasztottMegye]=useState("");
    const[megyeTelepulesek,setMegyeTelepulesek]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8000/api/megyek')
        .then(res=>res.json())
        .then(megyek=>setMegyek(megyek))
        .catch(err=>console.log(err));
    },[]);

    useEffect(()=>{
        if(kivalasztottMegye!==""){
            fetch(`http://localhost:8000/api/megyek/megye/${kivalasztottMegye}`)
            .then(res=>res.json())
            .then(adat=>setMegyeTelepulesek(adat))
            .catch(err=>console.log(err))
        }
    },[kivalasztottMegye])



    return <MegyeContext.Provider value={{
        megyek,
        kivalasztottMegye,
        setKivalasztottMegye,
        megyeTelepulesek
    }}>{children}</MegyeContext.Provider>
}

export default MegyeContext;