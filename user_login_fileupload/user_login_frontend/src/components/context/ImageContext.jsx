import {useState,createContext} from 'react';
import {toast} from 'react-toastify';

const ImageContext=createContext();

export const ImageProvider=({children})=>{
    const [refresh,setRefresh]=useState(false);
    const token=sessionStorage.getItem('usertoken');

    const imgUpdate=()=>{
        setRefresh(prev=>!prev);
    }

    const imgDelete=(imageId)=>{
        console.log("Delete func:"+imageId);
        fetch('http://localhost:8000/api/images',{
            method:'DELETE',
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify({imageId})


        })
        .then(res=>res.json())
        .then(valasz=>{toast.success(valasz.message,{position: toast.POSITION.BOTTOM_RIGHT});imgUpdate()})
        .catch(err=>toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT}))
    }
    

    return <ImageContext.Provider value={{refresh,imgUpdate,imgDelete}}>{children}</ImageContext.Provider>
}

export default ImageContext;