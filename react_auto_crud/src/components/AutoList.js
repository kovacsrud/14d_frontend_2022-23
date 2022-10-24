import AutoRender from "./AutoRender";
import {useEffect,useState} from 'react';

function AutoList() {
    const[autok,setAutok]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/autok')
        .then(res=>res.json())
        .then(autok=>setAutok(autok))
        .catch(err=>console.log(err));

    },[refresh]);

  return (
    <div>Autó lista
        {
            autok.map((auto,index)=>(<AutoRender auto={auto} update={update} />))
        }
    </div>
  )
}

export default AutoList;