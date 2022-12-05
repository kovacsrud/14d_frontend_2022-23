import {useState,useContext,useEffect} from 'react';
import TelepulesContext from '../context/TelepulesContext';

function Telepules() {
    const {telepulesnevek}=useContext(TelepulesContext);
    const [selectedTelepules,setSelectedTelepules]=useState("");
    const [telepules,setTelepules]=useState({});

    useEffect(()=>{
        fetch(`http://localhost:8000/api/telepulesek/telepulesnev/${selectedTelepules}`)
        .then(res=>res.json())
        .then(adat=>setTelepules(adat))
        .catch(err=>console.log(err));
    },[selectedTelepules]);

  return (
  <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl my-10">Település adatok</h2>
        <select onChange={(e)=>setSelectedTelepules(e.target.value)} className='select select-secondary w-full max-w-xs text-black'>
            {
                telepulesnevek.map((varos,index)=>(<option key={index} value={varos.nev}>{varos.nev}</option>))
            }
        </select>
        <div className='my-10'>
            <p>{selectedTelepules} {telepules.jogallas}</p>
            <p>{telepules.megyenev} megye</p>
            <p>Terület:{telepules.terulet}</p>
            <p>Népesség:{telepules.nepesseg}</p>
            <p>Lakások száma:{telepules.lakasok}</p>
        </div>
        
        
      </div>
    </div>
   </section>
  )
}

export default Telepules