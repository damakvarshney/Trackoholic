import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TrackDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TrackDetailScreen</Text>
    </View>
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

export default TrackDetailScreen;
