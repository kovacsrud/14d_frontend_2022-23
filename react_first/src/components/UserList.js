import {useState,useEffect} from 'react';
import User from './User';
import UserSelect from './UserSelect';
import Spinner from './Spinner';

function UserList() {

    const[users,setUsers]=useState([]);
    const[db,setDb]=useState(5);
    const[loading,setLoading]=useState(false);

    const fetchUsers=async ()=>{
      const response=await fetch(`https://randomuser.me/api/?results=${db}`)

      const {results} =await response.json();

      setUsers(results);
      setLoading(false);

    }
   
    
    useEffect(()=>{
       
        setLoading(true);
        fetch(`https://randomuser.me/api/?results=${db}`)
        .then(res=>res.json())
        .then(adat=>{
          setUsers(adat.results);
          setLoading(false);
        })
        .catch(err=>console.log(err));
      
        //fetchUsers();

    },[db])

  return (
    <div>
        <h1>Felhasználók ({users.length})</h1>

        <UserSelect setDb={setDb} />
        <div className="d-flex flex-wrap flex-row">
        {
          !loading ? 
            users.map((elem,index)=>(<User key={index} user={elem} />)) 
           :
           
           <Spinner />
          
        }
        </div>
        

    </div>
  )
}

export default UserList;