import {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import MegyeContext from '../context/MegyeContext';

function MegyeTelepules() {
    const{setKivalasztottMegye,megyeTelepulesek}=useContext(MegyeContext);

    let megyenev="";
    const {state}=useLocation();
    if(state){
        megyenev=state.megyenev;
        setKivalasztottMegye(megyenev);
    }

  return (
    <div className='text-white'>
        <h2>MegyeTelepules {megyenev}</h2>
        <h3>{megyeTelepulesek.length}</h3>
        </div>
  )
}

export default MegyeTelepules