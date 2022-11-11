import Kutyanev from "./Kutyanev";

import KutyanevForm from "./KutyanevForm";
import {useState} from 'react';

function KutyanevRender({kutyanev,update}) {

    const[showForm,setShowForm]=useState(false);


    return(
        <div>
        {
     
            !showForm ? (<Kutyanev kutyanev={kutyanev} setShowForm={setShowForm} update={update}/>) 
            :
             //(<KutyanevForm inputKutyanev={kutyanev} update={update} />)
             <div>
             <Kutyanev kutyanev={kutyanev} setShowForm={setShowForm} update={update}/>
             
            
             
             <p>Lófasz</p>
             </div>
        
        }
        </div>
    )
    
      
                 
        
    
  
}

export default KutyanevRender