import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AutoForm({auto,update}) {

    let formObj={};
    let method="POST";
    let id="";
    const navigate=useNavigate();

    
    if(auto!=="undefined" && auto!=null){
        formObj={
            id:auto.id,
            marka:auto.marka,
            tipus:auto.tipus,
            rendszam:auto.rendszam,
            kor:auto.kor
            }
        method="PATCH";    
        id=auto.id;
        } else {
            formObj={
                marka:"",
                tipus:"",
                rendszam:"",
                kor:0
            }
        }
    

    const[formData,setFormData]=useState(formObj);

    

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

    const sendData=async (data)=>{
        const response=await fetch(`http://localhost:8000/autok/${id}`,{
            method:`${method}`,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        });

        const eredmeny=await response.text();
        alert(eredmeny);
        update();
        
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        sendData(formData);
        if(method==="POST"){
            setFormData({
                marka:"",
                tipus:"",
                rendszam:"",
                kor:0
            });
            //navigate('/autolist');
        }
     
    }


    return (
    <div>
        
        <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="marka" className="form-label">Márka</label>
          <input type="text" value={formData.marka} onChange={writeData} className="form-control" id="marka"/>
          <label for="tipus" className="form-label">Típus</label>
          <input type="text" value={formData.tipus} onChange={writeData} className="form-control" id="tipus"/>
          <label for="rendszam" className="form-label">Rendszám</label>
          <input type="text" value={formData.rendszam} onChange={writeData} className="form-control" id="rendszam"/>
          <label for="kor" className="form-label">Kor</label>
          <input type="text" value={formData.kor} onChange={writeData} className="form-control" id="kor"/>
          <button type="submit" className="btn btn-primary">Küldés</button>
        </div>

        </form>

    </div>
  );

}

export default AutoForm;