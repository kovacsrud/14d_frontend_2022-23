import { useState } from 'react';
import Auto from './Auto';
import AutoForm from './AutoForm';

function AutoRender({auto,update}) {
    const[showForm,setShowForm]=useState(false);
    const form=()=>{
        setShowForm(prev=>!prev);
    }

  return (
    <div>
        {
            !showForm ? <Auto auto={auto} update={update} form={form} />
            :
            <div>
                <Auto auto={auto} update={update} form={form}/>
                <AutoForm auto={auto} update={update} />
            </div>

        }
    </div>
  )
}

export default AutoRender;