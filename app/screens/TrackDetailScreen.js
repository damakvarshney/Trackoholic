import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context } from "../context/TrackContext";
import Spacer from "../components/Spacer";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("id");
  const { state } = useContext(Context);

  const track = state.find((t) => t._id === _id);

  return (
    <>
      <Spacer>
        <Text h3>{track.name}</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            ...track.locations[0].coords,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
          }}
        >
          <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
        </MapView>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
