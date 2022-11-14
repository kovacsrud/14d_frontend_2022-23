import {useContext} from 'react';
import KutyafajtaContext from '../context/KutyfajtaContext';

function Kutyafajta({kutyafajta,kapcsol}) {
    const {torles}=useContext(KutyafajtaContext);
    const{id,nev,eredetinev}=kutyafajta;

  return (
    <div className="card w-96 bg-primary text-primary-content m-2">
    <div className="card-body">
    <h2 className="card-title">{nev}</h2>
    <p>{eredetinev}</p>
    <div className="card-actions justify-end">
      <button className="btn" onClick={kapcsol}>Módosítás</button>
      <button className="btn" onClick={()=>torles(id)}>Törlés</button>
    </div>
  </div>
</div>
  )
}

export default Kutyafajta
