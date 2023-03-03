import {useState,useContext} from 'react';
import ImageContext from './context/ImageContext';

function Confirm({imageId}) {
    const {imgDelete}=useContext(ImageContext);
    const [open,setOpen]=useState(false);
  return (
    <div>
        <button onClick={()=>setOpen(true)} className='btn btn-primary'>Törlés</button>
    {
        open ? 
        <>
        <div className='p-5 w-72 absolute bg-sky-300 rounded-lg m-5'>
        <div className='flex justify-center items-center'>
        <div className='flex-column'>
            <p className='text-2xl m-2 text-center'>Biztosan törli?</p>
            <button onClick={()=>{imgDelete(imageId);setOpen(false)}} className='btn btn-primary mx-5'>Törlés</button>
            <button onClick={()=>setOpen(false)} className='btn btn-secondary'>Mégse</button>
        </div>
        </div>

        </div>
        </>
        :
        <></>
    }
    
    </div>
  )
}

export default Confirm