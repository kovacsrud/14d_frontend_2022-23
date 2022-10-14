
function PlainUser({user,setIsDetail}) {
  return (
    <div className="d-flex flex-column">
        <p onClick={()=>setIsDetail(prev=>!prev)} >{user.name.title} {user.name.first} {user.name.last} <i class="arrow-right-circle-fill"></i></p>
    </div>
  )
}

export default PlainUser;
