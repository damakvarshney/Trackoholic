import React, { useContext } from "react";
import MapView from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
import AppActivityIndicator from "./AppActivityIndicator";

const Map = ({ mapStyle }) => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <AppActivityIndicator visible={true} />;
  }

  return (
    <>
      <MapView
        style={mapStyle}
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.05,
          latitudeDelta: 0.05,
        }}
      >
        <MapView.Circle
          center={currentLocation.coords}
          radius={15}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
        <MapView.Marker
          coordinate={currentLocation.coords}
          title="Damak Agencies"
          description="Home"
        />
      </MapView>
    </>
  );
};

export default Map;
