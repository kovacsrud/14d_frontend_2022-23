import { useState,useEffect,createContext } from "react";

const KutyaContext=createContext();

export const KutyaProvider=({children})=>{
    const[kutyak,setKutyak]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyak')
        .then(res=>res.json())
        .then(adat=>setKutyak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    const adatKuldes=async (adat,method)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyak',{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const valasz=await response.text();
        update();
        alert(valasz);

    }

    const torles=async (id)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyak',{
          method:'DELETE',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({id})
        });
  
        const valasz=await response.text();
        update();
        alert(valasz);
  
    }


    return <KutyaContext.Provider value={{kutyak,update,adatKuldes,torles}}>{children}</KutyaContext.Provider>
}

export default KutyaContext;