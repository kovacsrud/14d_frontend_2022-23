
function Auto({auto,update,form}) {

    const autoDelete=async (id)=>{

        let kerdes=window.confirm("Biztosan törli?");
        
        if(kerdes){

            const response=await fetch(`http://localhost:8000/autok/${id}`,{
                method:"DELETE"
            });

            const eredmeny=await response.text();
            alert(eredmeny);
            update();
        }

    }

  return (
    <div className="card mb-3" style={{maxWidth:"540px"}}>
    <div className="row g-0">
       
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{auto.marka} {auto.tipus}</h5>
            <p className="card-text">{auto.rendszam}</p>
            <p className="card-text">{auto.kor}</p>
            <h4><i onClick={()=>autoDelete(auto.id)} className="bi bi-trash"></i>&nbsp;<i onClick={()=>form()} className="bi bi-pen"></i></h4>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Auto;