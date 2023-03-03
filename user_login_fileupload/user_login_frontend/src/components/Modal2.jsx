import { useState } from 'react';

function Modal2() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
                Törlésssss
            </button>
            {
                open ?
                    <>
                        
                        <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
                            
                            <div className="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <div className="flex flex-col ml-3">
                                            <div className="font-medium leading-none text-gray-100">Biztosan törli a fájlt ?</div>
                                            <p className="text-sm text-gray-500 leading-none mt-1">A kép véglegesen törlődik a szerverről!
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Törlés</button>
                                    <button onClick={()=>setOpen(false)} className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Mégse</button>

                                </div>
                            </div>
                        </div>


                    </>
                    :
                    <>
                    </>
            }
        </div>
    )
}

export default Modal2