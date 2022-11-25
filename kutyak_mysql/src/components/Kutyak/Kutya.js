import {useContext,useState} from 'react';
import KutyaContext from '../context/KutyaContext';
import {useNavigate} from 'react-router-dom';
import ConfirmBox from "react-dialog-confirm";
import '../../../node_modules/react-dialog-confirm/build/index.css';



function Kutya({kutya}) {
  const navigate=useNavigate();
  const {torles}=useContext(KutyaContext);
  const [isOpen,setIsOpen]=useState(false);
  const handleClose=()=>{setIsOpen(!isOpen)};
  const handleConfirm=()=>{torles(kutya.id);handleClose()}
  const handleCancel=()=>{handleClose()}

  const modositas=(kutya)=>{
    navigate('/ujkutya',{state:{kutya}});
  }

  return (
    <div className="card w-96 bg-sky-200 text-black my-2">
    <div className="card-body items-center text-center">
      <h2>{kutya.kutyanev}</h2>
      <p className="card-title">Fajta:{kutya.nev}</p>
      <p className="card-title">Életkor:{kutya.eletkor}</p>
      <p className="card-title">Utolsó ellenőrzés:{kutya.utolsoell}</p>
      <div className="card-actions justify-end">
        <button onClick={()=>modositas(kutya)} className="btn btn-primary">Módosítás</button>
        <button onClick={()=>handleClose()} className="btn btn-primary">Törlés</button>
      </div>
    </div>
    <ConfirmBox // Note : in this example all props are required
    options={{
    icon:"https://img.icons8.com/clouds/100/000000/vector.png",
    text:'Biztosan törli?',
    confirm:'Igen',
    cancel:'Nem',
    btn:true
    }}
    isOpen={isOpen}
    onClose={handleClose}
    onConfirm={handleConfirm}
    onCancel={handleCancel}
    />
  </div>
  )
}

export default Kutya;