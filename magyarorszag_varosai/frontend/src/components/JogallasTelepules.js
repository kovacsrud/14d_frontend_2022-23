import {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Vissza from './Vissza';
import TipusContext from '../context/TipusContext';

function JogallasTelepules() {
    const{setKivalasztottJogallas,jogallasTelepulesek}=useContext(TipusContext);
    let jogallas="";
    const {state}=useLocation();
    if(state)  {
        jogallas=state.jogallas;
        setKivalasztottJogallas(jogallas);
    }
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl my-10">
            Települések jogállás szerint
          </h2>
          <Vissza />
          <div className="m-5 bg-gray-800 text-left block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">           
            <h3 className="mt-4 my-6 text-xl text-center font-bold text-white">Település típus:{jogallas}</h3>            
            <ul>
                {
                    jogallasTelepulesek.map((elem,index)=>(<li className="my-2" key={index}>{elem.telepulesnev}</li>))
                }
            </ul>
          </div>  
        
    


        </div>
      </div>
    </section>
  )
}

export default JogallasTelepules