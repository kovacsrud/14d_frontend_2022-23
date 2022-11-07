import {useNavigate} from 'react-router-dom';

function Rendeles() {
    const navigate=useNavigate();
    const buttonClick=()=>{
        navigate('/');
    }
  return (
    <div>
       <h2> Rendeles</h2>
       <button onClick={buttonClick} className='btn btn-primary'>Főoldal</button>
    </div>
  )
}

export default Rendeles