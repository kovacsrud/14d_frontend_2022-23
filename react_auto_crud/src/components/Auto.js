
function Auto({auto,update,form}) {
  return (
    <div className="card mb-3" style={{maxWidth:"540px"}}>
    <div className="row g-0">
       
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{auto.marka} {auto.tipus}</h5>
            <p className="card-text">{auto.rendszam}</p>
            <p className="card-text">{auto.kor}</p>
            <h4><i className="bi bi-trash">&nbsp;<i onClick={()=>form()} className="bi bi-pen"></i></i></h4>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Auto;