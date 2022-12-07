import {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import MegyeContext from '../context/MegyeContext';
import {Link} from 'react-router-dom';
import Vissza from './Vissza';

function MegyeTelepules() {
    const{setKivalasztottMegye,megyeTelepulesek}=useContext(MegyeContext);

    let megyenev="";
    const {state}=useLocation();
    if(state){
        megyenev=state.megyenev;
        setKivalasztottMegye(megyenev);
    }

  return (

    <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          {megyenev} megye
        </h2>
        <Vissza />
        <div className="flex flex-row flex-wrap bg-gray-900 items-center justify-center p-2">
        {
          megyeTelepulesek.map((telepules,index)=>(
          <div className="basis-1/4 text-xl bg-gray-600 rounded text-center m-5 p-10 text-white">
            <Link to='/telepulesadat' state={{telepules}}>{telepules.telepulesnev} {telepules.jogallas}</Link>
          </div>))
        }
        </div>
    </div>
    </div>
    </section>
    
  )
}

export default MegyeTelepules