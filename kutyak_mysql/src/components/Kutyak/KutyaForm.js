import { useState, useEffect, useContext } from "react";
import KutyafajtaContext from '../context/KutyfajtaContext';

function KutyaForm() {
  const {kutyafajtak}=useContext(KutyafajtaContext);
  const [kutyanevek,setKutyanevek]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api/rendelo/kutyanevek')
    .then(res=>res.json())
    .then(adat=>setKutyanevek(adat));
  },[]);
  

  return (
    <div className="flex justify-center items-center">
      <div className="flex-column">
        <h2>Új rendelési adat felvitele</h2>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">A kutya életkora</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            id="eletkor"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Utolsó ellenőrzés dátuma</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            id="utolsoell"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Válasszon kutyanevet</span>           
          </label>
          <select className="select select-bordered" id="nev">
           {
              kutyanevek.map((kutyanev)=>(<option key={kutyanev.id}>{kutyanev.kutyanev}</option>))
           } 
          </select>         
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Válasszon kutyafajtát!</span>           
          </label>
          <select className="select select-bordered" id="fajtanev">
           {
             kutyafajtak.map((kutyafajta)=>(<option key={kutyafajta.id}>{kutyafajta.nev}</option>))
           }
          </select>         
        </div>
        <button type="submit" className="btn btn-primary">Küldés</button>
      </div>
    </div>
  );
}

export default KutyaForm;
