import KutyaContext from "../context/KutyaContext";
import {useContext} from "react";
import Kutya from "./Kutya";

function KutyaLista() {
    const {kutyak}=useContext(KutyaContext);
  return (
    <div className='flex justify-center items-center'>
        <div className='flex-column'>
        {
            kutyak.map((kutya,index)=>(<Kutya key={kutya.id} kutya={kutya} />))
        }
    </div>
    </div>
  )
}

export default KutyaLista