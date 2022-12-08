import {useState,useContext,useEffect} from 'react';
import TelepulesContext from '../context/TelepulesContext';
import {Link} from 'react-router-dom';

import Terkep from './Terkep';

function Telepules() {
    const {telepulesnevek,telepules,setSelectedTelepules,selectedTelepules}=useContext(TelepulesContext);
    

  return (
  <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl my-10">Település adatok</h2>

        <div className="mt-12 my-10 text-center">
          <Link to='/'
            
            className="mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
          >
            <span className="text-sm font-medium"> Vissza </span>

            <svg
              className="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <select onChange={(e)=>setSelectedTelepules(e.target.value)} className='select select-secondary w-full max-w-xs text-black'>
            <option disabled selected>Válasszon települést!</option>
            {
                telepulesnevek.map((varos,index)=>(<option key={index} value={varos.nev}>{varos.nev}</option>))
            }
        </select>
        <div className='my-10'>
            <p>{selectedTelepules} {telepules.jogallas}</p>
            <p>{telepules.megyenev} megye</p>
            <p>Terület:{telepules.terulet}</p>
            <p>Népesség:{telepules.nepesseg}</p>
            <p>Lakások száma:{telepules.lakasok}</p>
        </div>
        
        <Terkep lng={telepules.lng} lat={telepules.lat} szeles={"600px"} magas={"600px"} zoom={13}/>
        
        
      </div>
    </div>
   </section>
  )
}

export default Telepules