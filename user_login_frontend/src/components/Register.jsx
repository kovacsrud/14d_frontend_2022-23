import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Register() {

  const navigate=useNavigate();

  const kuldes=(formData,method)=>{
    fetch('http://localhost:8000/api/user/register',{
      method:method,
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(token=>sessionStorage.setItem('usertoken',token))
    .catch(err=>console.log(err));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    kuldes(formData,'POST');
    navigate('/');
  }
  
  let formObj={};

  formObj={
    username:"",
    email:"",
    age:"",
    password:"",
    passwordAgain:""
  }

  const[formData,setFormData]=useState(formObj);

  const writeData=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
  }


  return (
    <div>
      <h2 className='text-center font-bold text-2xl my-10'>Regisztráció</h2>

      <div className='flex justify-center items-center'>
        <div className='flex-column'>
          <form onSubmit={onSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg">Felhasználói név:</span>
              </label>
              <input type="text" onChange={writeData} id="username" value={formData.username} required className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg">E-mail cím:</span>
              </label>
              <input type="text" onChange={writeData} id="email" value={formData.email} required className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg">Életkor:</span>
              </label>
              <input type="text" onChange={writeData} id='age' value={formData.age} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg">Jelszó:</span>
              </label>
              <input type="password" onChange={writeData} id="password" value={formData.password} required className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg">Jelszó mégegyszer:</span>
              </label>
              <input type="password" onChange={writeData} id="passwordAgain" value={formData.passwordAgain} required className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <button type="submit" className='btn-secondary mx-10 my-4'>Küldés</button>
            </div>

          </form>
        </div>


      </div>
    </div>
  )
}

export default Register