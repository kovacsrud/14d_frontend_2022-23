import {useContext} from 'react';
import IpContext from '../context/IpContext';

function Info() {
    const {ipInfo}=useContext(IpContext);
    const {ip,city,region,country_name,latitude,longitude}=ipInfo;
  return (
    <div>
        <p>{ip}</p>
        <p>{city}</p>
        <p>{region}</p>
        <p>{country_name}</p>
        <p>{latitude}</p>
        <p>{longitude}</p>
    </div>
  )
}

export default Info