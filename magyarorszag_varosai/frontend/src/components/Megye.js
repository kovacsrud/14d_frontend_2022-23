import {useContext} from 'react';
import {Link} from 'react-router-dom';
import MegyeContext from '../context/MegyeContext';
import {AiOutlinePlayCircle} from 'react-icons/ai';

function Megye() {
    const{megyek}=useContext(MegyeContext);
  return (
    <section className="bg-gray-900 text-white">
     <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl my-10">Az egyes megyék települései</h2>
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
        <div className='m-5 bg-gray-800 text-left block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'>
        <h3 className="mt-4 my-6 text-xl text-center font-bold text-white">Megyék</h3>
        <ul>
        {
            //megyek.map((elem,index)=>(<NavButton key={index} megyenev={elem.megyenev}/>))
            megyek.map((elem,index)=>(
            <li key={index} megyenev={elem.megyenev}>
              <Link to='/megyetelepules' state={{"megyenev":elem.megyenev}}>
              <div className='flex flex-row items-center m-2'>
                <AiOutlinePlayCircle color='#DB2777'  size={30}/>
                <span className='mx-2'>{elem.megyenev}</span>
                </div>
              </Link>
            </li>))
        }
        </ul>
        </div>
        
       </div>
      </div>
    </section>
    
  )
}

export default Megye