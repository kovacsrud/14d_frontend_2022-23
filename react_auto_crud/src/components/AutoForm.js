import {useState} from 'react';

function AutoForm() {

    const[formData,setFormData]=useState({
        marka:"",
        tipus:"",
        rendszam:"",
        kor:0
    });

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }


  return (
    <div>
        <h2>Új autó felvitele</h2>
        <form>
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