import { useState } from 'react';

function Modal() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className='btn btn-primary' onClick={() => setOpen(true)} >Törlés</button>
            {
                open ?
                    <>
                       
                            <div className='w-60 m-2 rounded-lg p-5  absolute bg-sky-300 z-10'>
                                <p className='text-xl'>Biztos törli?</p>
                                <button className='btn btn-secondary m-2' onClick={() => alert("Törlés funkció")}>Törlés</button>
                                <button className='btn btn-secondary m-2' onClick={() => setOpen(false)}>Mégse</button>
                            </div>
                       
                    </>
                    :
                    <>
                    </>
            }
        </div>
    )
}

export default Modal