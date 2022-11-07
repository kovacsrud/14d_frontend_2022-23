import { MapContainer, TileLayer, Marker,Popup,useMap } from 'react-leaflet';
import {useContext} from 'react';
import IpContext from '../context/IpContext';

function Map() {
    const{ipInfo}=useContext(IpContext);
    const {latitude,longitude}=ipInfo;
  return (
    <div>
        <h2>Térkép</h2>
        <p>Latitude:{latitude},Longitude:{longitude}</p>
        {/*<MapContainer center={{lat:40,lng:20}} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <Marker position={{lat:40,lng:20}}>
                <Popup>
                    Popup <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>*/}
    </div>
  )
}

export default Map