import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "./AppText";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const AppIcon = ({ appStyle }) => {
  return (
    <View style={[styles.container, appStyle]}>
      <FontAwesome5 name="map-marker-alt" size={24} color="white" />
      <AppText style={styles.text}>Trackoholic</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

export default AppIcon;
