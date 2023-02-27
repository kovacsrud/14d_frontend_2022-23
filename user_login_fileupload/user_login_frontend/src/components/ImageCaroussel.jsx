

function ImageCaroussel({imagedata}) {
    const {path,images}=imagedata;
  return (
    <div className="carousel carousel-center rounded-box">

    {
        images.map((image)=>(
        <div className="carousel-item">
            <img className="w-40" src={`http://localhost:8000${path}${image.imageName}`} alt={image.imageName}/>
        </div>
        ))
    }
  

  </div>
  )
}

export default ImageCaroussel
