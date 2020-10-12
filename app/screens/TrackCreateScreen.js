import "../_mockLocation";
import React, { useContext, useState, useCallback } from "react";
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
import Blinker from "../components/Blinker";
import useSaveTrack from "../hooks/useSaveTrack";
import AppIcon from "../components/AppIcon";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  //useContext
  const {
    state: { recording, locations, name },
    addLocation,
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  //useCallback
  const callBack = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  //useLocation
  const [error] = useLocation(isFocused || recording, callBack);
  const [saveTrack] = useSaveTrack();
  console.log(locations.length);

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
          <Blinker recordBoolean={recording} />
        </View>
        <AppIcon />
        <AppText style={styles.detail}>
          {"Your Current Location above."}
        </AppText>
        {recording === false && locations.length !== 0 ? (
          <AppTextInput
            icon="add-location"
            placeholder="Track Name"
            width="100%"
            value={name}
            onChangeText={changeName}
          />
        ) : null}
        {recording ? (
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
        {recording === false && locations.length !== 0 ? (
          <AppButton
            buttonStyle={styles.button}
            title="Save Now"
            titleColor={colors.brightPurple}
            onPress={saveTrack}
          />
        ) : null}
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
    fontSize: 14,
    backgroundColor: colors.white,
  },
  detail: {
    fontSize: 12,
    color: colors.white,
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 15,
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
