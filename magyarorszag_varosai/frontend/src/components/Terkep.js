import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import {useEffect} from 'react';

function Terkep(props) {
    const{lng,lat,szeles,magas,zoom}=props;
    mapboxgl.accessToken="pk.eyJ1Ijoic3phamJlcnBpcmF0eSIsImEiOiJja3drd25vbTAxd2YyMnBuc3IxenhqMHNvIn0.c55V1Z3GlPscRZjxsWZYrQ";
    useEffect(()=>{
      if(lng && lat){
      let map=new mapboxgl.Map(
        {
          container:"mapContainer",
          style: "mapbox://styles/mapbox/streets-v11",
          center:[lng,lat],
          zoom:zoom
        }
      );
      const marker=new mapboxgl.Marker().setLngLat([lng,lat]).addTo(map);
     }

    },[lng,lat,zoom]);
  return (
    <div id="mapContainer" style={{width:szeles,height:magas}}>
    </div>
  )
}

export default Terkep