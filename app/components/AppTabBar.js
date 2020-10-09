import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AppTabBar = () => {
  return (
    <TabBar
      onPress={(tabIndex) => {
        this._handlePress(tabIndex);
      }}
      values={[]}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
});

export default AppTabBar;
