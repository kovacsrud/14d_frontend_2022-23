import {useLocation} from 'react-router-dom';
import Terkep from './Terkep';
import Vissza from './Vissza';

function TelepulesAdat() {
    const {state}=useLocation();
    const {telepules}=state;
  return (
    <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl my-10">
        {telepules.telepulesnev}
        </h2>
        <Vissza />
        
        <Terkep lng={telepules.lng} lat={telepules.lat} szeles={"500px"} magas={"500px"} zoom={13}/>         
     </div>   
    </div>
    </section>
  )
}

export default TelepulesAdat