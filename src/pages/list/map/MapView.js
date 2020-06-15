import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

import styled from "styled-components";

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

const MapView = ({ rooms }) => {
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: 33.393506, lng: 126.55652 });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCqJz2U6vsxMjz3npYEj1mBqvzrPpVbgYY",
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const fitBounds = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    rooms.map((room, idx) => {
      bounds.extend({ lat: room.latitude, lng: room.longitude });
      return idx;
    });
    map.fitBounds(bounds);
  };

  const loadHandler = (map) => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {rooms.map((room, idx) => (
          <OverlayView
            key={idx}
            position={{
              lat: room.latitude,
              lng: room.longitude,
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <CustomMarker>
              <span style={{ marginRight: "0.25em" }}>${room.price}</span>
              <i
                className={`${room.is_wishlist ? "fas fa-heart" : null}`}
                style={{ color: "red" }}
              ></i>
            </CustomMarker>
          </OverlayView>
        ))}
        {/* {rooms.map((room, idx) => {
          return (
            <Marker key={idx} position={{ lat: 33.393506, lng: 126.55652 }} />
          );
        })} */}
      </GoogleMap>
    </div>
  );
};

const CustomMarker = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  color: black;
  border: 1px solid ${(props) => props.theme.color.gray};
  background: white;
  border-radius: 1em;
  padding: 0.25em 1em;
`;

export default MapView;
