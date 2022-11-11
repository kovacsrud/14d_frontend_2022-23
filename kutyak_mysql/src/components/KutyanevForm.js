import {useState} from 'react';

function KutyanevForm({inputKutyanev,update}) {
    let method='POST';
    const[kutyanev,setKutyanev]=useState("");

    if(inputKutyanev!=="undefined" && inputKutyanev!=null){
        setKutyanev(inputKutyanev.kutyanev);
        method='PATCH';
    }



    const adatKuldes=async (adat)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyanevek',{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const valasz=await response.text();
        
        alert(valasz);

    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(method=='PATCH'){
            adatKuldes({"id":inputKutyanev.id,"kutyanev":kutyanev});
            update();
        } else {
            adatKuldes({kutyanev});
        }
    }

  return (
    <div>
        <h2>Új kutyanév felvitele</h2>
        <form onSubmit={onSubmit}>
        <input type="text" placeholder="Új kutyanév" value={kutyanev} onChange={(e)=>setKutyanev(e.target.value)} className="input input-bordered w-full max-w-xs" />
        <button type="submit" className="btn btn-primary">Küldés!</button>

        </form>
    </div>
  )
}

export default KutyanevForm;