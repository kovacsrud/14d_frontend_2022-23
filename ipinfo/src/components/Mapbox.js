import {useContext,useEffect} from 'react';
import IpContext from '../context/IpContext';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox() {
    const{ipInfo}=useContext(IpContext);
    const {latitude,longitude}=ipInfo;
    mapboxgl.accessToken="pk.eyJ1Ijoic3phamJlcnBpcmF0eSIsImEiOiJja3drd25vbTAxd2YyMnBuc3IxenhqMHNvIn0.c55V1Z3GlPscRZjxsWZYrQ";
    useEffect(()=>{
        if(latitude && longitude){
            let map=new mapboxgl.Map({
                container:"mapContainer",
                style: "mapbox://styles/mapbox/streets-v11",
                center:[longitude, latitude],
                //center:[19.0399, 47.339],
                zoom:10
    
            });
            const marker = new mapboxgl.Marker()
            //.setLngLat([19.0399, 47.339])
            .setLngLat([longitude, latitude])
            .addTo(map);
        }
    },[latitude,longitude]);
    
  return (
    <div id="mapContainer" style={{width:"600px",height:"200px"}}>
        
    </div>
  )
}

export default Mapbox