import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

const Screen = ({ children, style }) => {
  return (
    <View style={[styles.screen, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
