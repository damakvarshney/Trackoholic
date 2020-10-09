import "../_mockLocation";
import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import Map from "../components/Map";
import ErrorMessage from "./../components/ErrorMessage";
import useLocation from "./../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import { Context as LocationContext } from "../context/LocationContext";
import AppText from "./../components/AppText";
import AppButton from "./../components/AppButton";
import colors from "../config/colors";
import AppTextInput from "./../components/AppTextInput";
import { FontAwesome5 } from "@expo/vector-icons";
import Blinker from "../components/Blinker";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const [trackName, setTrackName] = useState("");

  const {
    state,
    addLocation,
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [error] = useLocation(isFocused, (location) =>
    addLocation(location, state.recording)
  );
  console.log(state.location.length);
  return (
    <View style={styles.container}>
      <Map mapStyle={styles.map} />
      {error && (
        <ErrorMessage
          error="Please need enable permission to Track."
          visible={error}
        />
      )}
      <View style={styles.recordContainer}>
        <View style={styles.blinkerView}>
          <Blinker recordBoolean={state.recording} />
        </View>

        <FontAwesome5 name="map-marker-alt" size={30} color="white" />
        <AppText style={styles.text}>Trackoholic</AppText>
        <AppText style={styles.detail}>
          {"Your Current Location above."}
        </AppText>
        <AppTextInput
          icon="add-location"
          placeholder="Track Name"
          width="100%"
          value={state.name}
          onChangeText={changeName}
        />
        {state.recording ? (
          <AppButton
            buttonStyle={styles.button}
            title="Stop"
            titleColor={colors.brightPurple}
            onPress={stopRecording}
          />
        ) : (
          <AppButton
            buttonStyle={styles.button}
            title="Record Now"
            titleColor={colors.brightPurple}
            onPress={startRecording}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: `100%`,
    height: `100%`,
    justifyContent: "flex-start",
    alignItems: `center`,
  },
  map: {
    width: "100%",
    height: "60%",
  },
  recordContainer: {
    height: "40%",
    position: "absolute",
    bottom: 0,
    alignSelf: "baseline",
    backgroundColor: colors.brightPurple,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 15,
    paddingTop: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    alignSelf: "center",
  },
  button: {
    fontSize: 16,
    backgroundColor: colors.white,
  },
  detail: {
    fontSize: 12,
    color: colors.white,
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 20,
  },
  blinkerView: {
    width: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "stretch",
    right: 15,
    height: 30,
    position: "absolute",
    top: 15,
  },
});

export default TrackCreateScreen;
