import {useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import ImageCaroussel from './ImageCaroussel';
import ImageCards from './ImageCards';
import ImageContext from './context/ImageContext';

function Images() {
    const{refresh}=useContext(ImageContext);
    const [images,setImages]=useState({});
    const token=sessionStorage.getItem('usertoken');
    const navigate=useNavigate();

    useEffect(()=>{
        if(token){
            fetch('http://localhost:8000/api/images',{
                method:'GET',
                headers:{
                    "Content-type":"Application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(images=>{setImages(images);console.log(images)})
            .catch(err=>toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT}));

        } else {
            navigate('/login');
        }


    },[refresh])


  return (
    <div>
        <h2 className='text-center font-bold text-2xl my-10'>A felhasználó képei</h2>
        {
            token && images.images!=null && images.images.length>0  ?
            <>
            {
                //images.images.map((kep)=>(<img src={`http://localhost:8000${images.path}${kep.imageName}`} />))
                //<ImageCaroussel imagedata={images} />
                <ImageCards imagedata={images} />
            }
            </>
            :
            <>
                <h2 className='text-center font-bold text-xl my-10'>Nincsenek feltöltött képek!</h2>
            </>
        }
    </div>
  )
}

export default Images