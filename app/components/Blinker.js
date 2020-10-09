import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const Blinker = ({ recordBoolean }) => {
  const [blink, setBlink] = useState("#8B0000");
  setInterval(() => {
    setBlink("#8B0000");
  }, 3000);
  setInterval(() => {
    setBlink(colors.danger);
  }, 2000);
  return (
    <>
      {recordBoolean && (
        <View style={[styles.animation, { backgroundColor: blink }]} />
      )}
      {recordBoolean ? null : <View style={styles.circle} />}
    </>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: "#8B0000",
    marginBottom: 10,
  },
  animation: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    marginBottom: 10,
  },
});

export default Blinker;
