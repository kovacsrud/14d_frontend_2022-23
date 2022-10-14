import {useState} from 'react';
import User from './User';
import PlainUser from './PlainUser';

function UserRender({user}) {
    const[isDetail,setIsDetail]=useState(false);

  if(!isDetail){
    return (<PlainUser user={user} setIsDetail={setIsDetail} />)
  } else {
    return (
        <div>
            <PlainUser user={user} setIsDetail={setIsDetail} />
            <User user={user} />
        </div>
    )
  }

}

export default UserRender;