import {useState,useEffect,createContext} from 'react';
import {toast} from 'react-toastify';

const KutyafajtaContext=createContext();

export const KutyafajtaProvider=({children})=>{
    
    const[kutyafajtak,setKutyafajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);
    const update=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyafajtak')
        .then(res=>res.json())
        .then(adat=>setKutyafajtak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    const adatKuldes=async (adat,method)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyafajtak',{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const valasz=await response.json();
        update();
        //alert(valasz);
        if(valasz.message){
            toast.success(valasz.message,{position: toast.POSITION.BOTTOM_RIGHT});
        }
        if(valasz.sqlMessage){
            toast.error(valasz.sqlMessage,{position: toast.POSITION.BOTTOM_RIGHT});
        }

    }

    const torles=async (id)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyafajtak',{
          method:'DELETE',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({id})
        });
  
        const valasz=await response.json();
        update();
        //alert(valasz);
        if(valasz.message){
            toast.success(valasz.message,{position: toast.POSITION.BOTTOM_RIGHT});
        }
        if(valasz.sqlMessage){
            toast.error(valasz.sqlMessage,{position: toast.POSITION.BOTTOM_RIGHT});
        }
  
    }


    return <KutyafajtaContext.Provider value={{kutyafajtak,update,adatKuldes,torles}}>{children}</KutyafajtaContext.Provider>

}

export default KutyafajtaContext;