import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./../components/AppText";

const Or = () => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "45%",
          height: 2,
          backgroundColor: "#D3D3D3",
        }}
      />
      <AppText
        style={{
          fontWeight: "bold",
          fontSize: 14,
          width: "10%",
          alignSelf: "center",
          paddingHorizontal: 5,
          color: "#D3D3D3",
        }}
      >
        OR
      </AppText>
      <View
        style={{
          width: "45%",
          height: 2,
          backgroundColor: "#D3D3D3",
        }}
      />
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

export default Or;
