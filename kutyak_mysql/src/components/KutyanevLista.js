import {useState,useEffect} from 'react';

import KutyanevRender from './KutyanevRender';

function KutyanevLista() {
    const[kutyanevek,setKutyanevek]=useState([]);
    const[refresh,setRefresh]=useState(false);
    

    const update=()=>{
        setRefresh((prev)=>!prev);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyanevek')
        .then(res=>res.json())
        .then(adat=>setKutyanevek(adat))
        .catch(err=>console.log(err));
    },[refresh]);
  return (
    <div>
        {
            kutyanevek.map((kutyanev,index)=>(<KutyanevRender key={index} kutyanev={kutyanev} update={update} />))
        }
    </div>
  )
}

export default KutyanevLista