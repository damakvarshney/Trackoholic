import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";
import AppText from "./../components/AppText";

const TrackDetailScreen = ({ navigation, route }) => {
  const track = route.params.track;
  console.log(track);

  return (
    <View style={styles.container}>
      <AppIcon />
      <AppText style={styles.text}>{track.name}</AppText>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          ...track.locations[0].coords,
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
        }}
      >
        <MapView.Circle
          center={track.locations[0].coords}
          radius={15}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
        <MapView.Marker
          coordinate={track.locations[0].coords}
          title="Damak Agencies"
          description="Home"
        />
        <MapView.Polyline
          coordinates={track.locations.map((loc) => loc.coords)}
          strokeColor={colors.blurDodger}
          fillColor="#1e90ff"
          strokeWidth={5}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brightPurple,
    paddingTop: 20,
  },
  mapStyle: {
    flex: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
    paddingBottom: 20,
  },
});

export default TrackDetailScreen;
