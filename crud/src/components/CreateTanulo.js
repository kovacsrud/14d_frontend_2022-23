import {useState} from 'react';

function CreateTanulo({setRefresh}) {
    const[id,setId]=useState(0);
    const[nev,setNev]=useState("");
    const[kor,setKor]=useState(0);

    const sendAdat=async (adat)=>{
        const res=await fetch('http://localhost:8000/tanulok',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const msg=await res.json();

        setRefresh(prev=>!prev);
                
        //alert(msg);
       
        

    }

    const onSubmit=(e)=>{
        e.preventDefault();
        
        sendAdat({id,nev,kor});

       
        
    }


  return (
    <div>
       <h2>Új tanuló felvétele</h2>
       <form onSubmit={onSubmit}>
       <div className="mb-3">
        <label for="id" className="form-label">Id:</label>
        <input type="text" className="form-control" onChange={(e)=>{setId(e.target.value)}}  value={id} id="id" placeholder="id" />
        <label for="nev" className="form-label">Név:</label>
        <input type="text" className="form-control" onChange={(e)=>{setNev(e.target.value)}} value={nev} id="nev" placeholder="név" />
        <label for="kor" className="form-label">Kor:</label>
        <input type="text" className="form-control" onChange={(e)=>{setKor(e.target.value)}} value={kor} id="kor" placeholder="kor" />
        <button className="btn btn-primary" type="submit">Küldés</button>
       </div>
       </form>

    </div>
  )
}

export default CreateTanulo;