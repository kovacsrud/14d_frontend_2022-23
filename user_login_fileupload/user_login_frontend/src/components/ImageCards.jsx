import Confirm from "./Confirm";
import Confirm2 from "./Confirm2";
import Confirm3 from "./Confirm3";

function ImageCards({imagedata}) {
    const{path,images}=imagedata;
  return (
    <div className="grid justify-items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        
        {

         images.map((image,index)=>(<div key={index} className="static w-96 card card-side bg-base-300 m-5 shadow-xl">
         <figure><img src={`http://localhost:8000${path}${image.imageName}`} alt={image.imageName}/></figure>
         <div className="card-body">
           <h2 className="card-title">{image.imageName}</h2>
           
           <div className="card-actions justify-end">
           <Confirm imageId={image._id}/>
           </div>
         </div>
       </div>))   
            
        }
    </div>
  )
}

export default ImageCards