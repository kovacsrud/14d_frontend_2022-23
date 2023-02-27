import React from 'react'

function ImageCards({imagedata}) {
    const{path,images}=imagedata;
  return (
    <div className="grid justify-items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {

         images.map((image)=>(<div className="w-96 card card-side bg-base-300 m-5 shadow-xl">
         <figure><img src={`http://localhost:8000${path}${image.imageName}`} alt={image.imageName}/></figure>
         <div className="card-body">
           <h2 className="card-title">{image.imageName}</h2>
           
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Törlés</button>
           </div>
         </div>
       </div>))   
            
        }
    </div>
  )
}

export default ImageCards