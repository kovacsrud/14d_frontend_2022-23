

function User({user}) {
  return (
    <div className="card m-3" style={{width: "18rem"}}>
     <img src={user.picture.large} className="card-img-top" alt={user.name.first}/>
        <div className="card-body">
        <h5 className="card-title">{user.name.first} {user.name.last}</h5>
        <p className="card-text">{user.location.city} {user.location.street.name} {user.location.street.number}</p>
    
        </div>
    </div>
  )
}

export default User