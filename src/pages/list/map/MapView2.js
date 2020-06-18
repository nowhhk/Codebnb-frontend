import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  OverlayView,
  InfoWindow,
} from "@react-google-maps/api";

const MapView = ({ rooms }) => {
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: 33.393506, lng: 126.55652 });
  const [zoom, setZoom] = useState(7);
  const [data, setData] = useState(5);

  // const data = [
  //   { latitude: 33.471629, longitude: 126.729448, price: 100, baths: 1 },
  //   { latitude: 33.356041, longitude: 126.286851, price: 100, baths: 1 },
  //   { latitude: 33.474483, longitude: 126.457682, price: 100, baths: 1 },
  //   { latitude: 33.323511, longitude: 126.665597, price: 100, baths: 1 },
  // ];

  // const data = [
  //   { latitude: 37.519807, longitude: 127.035855, price: 100 },
  //   { latitude: 37.533487, longitude: 127.007254, price: 100 },
  // ];

  // useEffect(() => {
  //   fetch("/data/data.json")
  //     .then((res) => res.json())
  //     // .then((res) => console.log(res));
  //     .then((res) => {
  //       setData(res.rooms);
  //     });
  // }, []);

  const fitBounds = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    // console.log("rooms: ", jinah);
    const hello = rooms.map((room, idx) => {
      bounds.extend({
        lat: room.latitude,
        lng: room.longitude,
      });

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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCqJz2U6vsxMjz3npYEj1mBqvzrPpVbgYY",
  });

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div>
      <GoogleMap
        onReady={loadHandler}
        center={center}
        zoom={zoom}
        mapContainerStyle={{
          height: "100vh",
          width: "100%",
        }}
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
