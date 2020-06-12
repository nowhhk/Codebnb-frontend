import React from "react";
import { GoogleMap, useLoadScript, OverlayView } from "@react-google-maps/api";
import * as jejuData from "../../../data/data.json";
import styled from "styled-components";

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 33.48901,
  lng: 126.498299,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCqJz2U6vsxMjz3npYEj1mBqvzrPpVbgYY",
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {jejuData.houses.map((jeju) => (
          <OverlayView
            key={jeju.properties.home_id}
            position={{
              lat: jeju.geometry.coordinates[0],
              lng: jeju.geometry.coordinates[1],
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <CustomMarker>
              <span style={{ marginRight: "0.25em" }}>
                {jeju.properties.price}
              </span>
              <i
                className={`${
                  jeju.properties.wishlist ? "fas fa-heart" : null
                }`}
                style={{ color: "red" }}
              ></i>
            </CustomMarker>
          </OverlayView>
        ))}
      </GoogleMap>
    </div>
  );
}

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
