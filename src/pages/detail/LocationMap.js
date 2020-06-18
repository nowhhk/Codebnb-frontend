import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { API } from '../../config'

// const LocationMap = () => {
//   const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`${API}/room/detail/1`)
  //     .then((res) => res.json())
  //     // .then((res) => console.log(res));
  //     .then((res) => {
  //       setData(res.room_info);
  //     });
  // }, []);

const containerStyle = {
  width: '100%',
  height: '500px'
};
 
const center = {
  lat: 33.518140,
  lng: 126.523240
};
 
function LocationMap() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 




  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCqJz2U6vsxMjz3npYEj1mBqvzrPpVbgYY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={center}
        />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 


export default LocationMap;

