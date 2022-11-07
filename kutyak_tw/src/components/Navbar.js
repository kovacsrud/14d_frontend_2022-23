import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Főoldal</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/kutyanevek'>Kutyanevek</Link>
          </li>
          <li>
            <Link to='/kutyafajtak'>Kutyafajták</Link>
          </li>
          <li>
            <Link to='/rendeles'>Rendelési adatok</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
