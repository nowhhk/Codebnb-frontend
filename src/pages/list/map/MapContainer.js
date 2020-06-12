import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import * as jejuData from "../../../data/data.json";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 33.48901, lng: 126.498299 }}
    >
      {jejuData.houses.map((jeju) => (
        <Marker
          key={jeju.properties.home_id}
          position={{
            lat: jeju.geometry.coordinates[0],
            lng: jeju.geometry.coordinates[1],
          }}
        />
      ))}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapContainer = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCJJKuB4VuiCZc-iYP-Hj1syXwpabhhUjQ"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default MapContainer;
