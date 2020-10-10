import React, { useContext } from "react";
import MapView from "react-native-maps";
import colors from "../config/colors";
import { Context as LocationContext } from "../context/LocationContext";
import AppActivityIndicator from "./AppActivityIndicator";

const Map = ({ mapStyle }) => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <AppActivityIndicator visible={true} />;
  }
  const points = locations.map((loc) => loc.coords);

  return (
    <>
      <MapView
        style={mapStyle}
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
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
        <MapView.Polyline
          coordinates={points}
          strokeColor={colors.blurDodger}
          fillColor="#1e90ff"
          strokeWidth={5}
        />
      </MapView>
    </>
  );
};

export default Map;
