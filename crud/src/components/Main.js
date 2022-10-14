import {useState,useEffect} from 'react';
import CreateTanulo from './CreateTanulo';


function Main() {
    const [tanulok,setTanulok]=useState([]);
    const [refresh,setRefresh]=useState(false);
  
    
    
    useEffect(()=>{
        fetch('http://localhost:8000/tanulok')
        .then(res=>res.json())
        .then(tanulok=>setTanulok(tanulok))
        .catch(err=>console.log(err))

    },[refresh]);

  return (
    <div>
       <h2>Tanulók</h2>
       {
        tanulok.map((elem,index)=>(
            <p key={index}>{elem.id} {elem.nev} {elem.kor}</p>
        ))
       }
        <CreateTanulo setRefresh={setRefresh} />
      
    </div>
  )
}

export default Main;