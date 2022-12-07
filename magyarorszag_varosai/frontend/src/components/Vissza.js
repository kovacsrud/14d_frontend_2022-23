import {Link} from 'react-router-dom';

function Vissza() {
  return (
    <div className="mt-12 my-10 text-center">
    <Link to={-1}
      
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
  )
}

export default Vissza