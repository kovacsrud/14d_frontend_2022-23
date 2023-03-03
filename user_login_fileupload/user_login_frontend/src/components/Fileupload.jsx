import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

function Fileupload() {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('usertoken');
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);

    const sendAdat=(data)=>{
        fetch('http://localhost:8000/api/files/upload',{
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:data
        })
        .then(res=>res.json())
        .then(valasz=>toast.success(valasz.message,{position: toast.POSITION.BOTTOM_RIGHT}))
        .catch(err=>toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT}));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData=new FormData();
        for(let i=0;i<images.length;i++){
            formData.append("file"+i,images[i])
        }
        sendAdat(formData);
        navigate('/images');
    }

    const imageChange=(e)=>{
        setImages([...images,...e.target.files]);
    }



    return (
        <div>
            <h2 className='text-center font-bold text-2xl my-10'>Fájlok feltöltése</h2>
            <div className='flex justify-center items-center'>
                <div className='flex-column'>
                    <form onSubmit={onSubmit}>

                        <input type="file" onChange={imageChange} className="file-input file-input-bordered w-full max-w-xs" multiple required />
                        <button className="btn btn-primary">Feltöltés</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Fileupload