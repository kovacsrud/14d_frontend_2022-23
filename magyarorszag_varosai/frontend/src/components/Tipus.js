import { useContext } from "react";
import TipusContext from "../context/TipusContext";
import Vissza from './Vissza';
import {Link} from 'react-router-dom';
import {AiOutlinePlayCircle} from 'react-icons/ai';

function Tipus() {
  const { jogallasok } = useContext(TipusContext);

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl my-10">
            Települések jogállás szerint
          </h2>
          <Vissza />
          <div className="m-5 bg-gray-800 text-left block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">           
            <h3 className="mt-4 my-6 text-xl text-center font-bold text-white">Település jogállások</h3>            
            <ul>
                {
                    jogallasok.map((elem,index)=>(
                    <li className="my-2" key={index}>
                      <Link to='/jogallastelepules' state={elem}>
                        <div className='flex flex-row items-center m-2'>
                        <AiOutlinePlayCircle color='#DB2777'  size={30}/>
                        <span className='mx-2'>{elem.jogallas}</span>
                        </div>
                      </Link>
                    </li>))
                }
            </ul>
          </div>  
        
    


        </div>
      </div>
    </section>
  );
}

export default Tipus;
