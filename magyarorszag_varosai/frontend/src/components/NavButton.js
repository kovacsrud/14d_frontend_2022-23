import {Link} from 'react-router-dom';

function NavButton({megyenev}) {
  return (
    <div>
        <Link to='/megyetelepules' state={{"megyenev":megyenev}}
            className="m-5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">           
            <h3 className="mt-4 text-xl font-bold text-white">{megyenev}</h3>            
        </Link>
    </div>
  )
}

export default NavButton