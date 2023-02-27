import {Link,useNavigate} from "react-router-dom";
import UserContext from "./context/UserContext";
import {useContext} from "react";

function Menu() {
    const {refresh,logout}=useContext(UserContext);
    const navigate=useNavigate();
    const token=sessionStorage.getItem('usertoken');
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">User Login</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            token ? 
                            (
                            <>
                                 <li><Link to="/images">Feltöltött képek</Link></li>
                                 <li><Link to="/upload">Fájlok feltöltése</Link></li>
                                 <li><Link to="/userdata">Felhasználó adatai</Link></li>
                                 <li><a onClick={()=>{logout();navigate('/')}}>Logout</a></li>
                            </>
                            ):
                            (
                            <>
                               <li><Link to='/register'>Regisztráció</Link></li>
                               <li><Link to='/login'>Login</Link></li>
                            </>
                            )
                        }
                       
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu