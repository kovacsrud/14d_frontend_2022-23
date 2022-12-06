import {useContext} from 'react';
import {Link} from 'react-router-dom';
import MegyeContext from '../context/MegyeContext';

function Megye() {
    const{megyek}=useContext(MegyeContext);
  return (
    <div className='text-white'>
        {
            megyek.map((elem,index)=>(<p key={index}>{elem.megyenev}</p>))
        }
        <Link to='/'>Főoldal</Link>
    </div>
  )
}

export default Megye