import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className="navbar bg-base-100 my-10">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">Rendelő</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Kutyanevek
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to='/kutyanevek'>Kutyanevek listája</Link></li>
          <li><Link to='/ujkutyanev'>Új kutyanév felvitele</Link></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar