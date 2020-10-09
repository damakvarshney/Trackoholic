import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import { TouchableOpacity } from "react-native-gesture-handler";

const TitleBar = ({ icon, title, titleBarStyle, onPress }) => {
  return (
    <View style={[styles.container, titleBarStyle]}>
      {icon && (
        <TouchableOpacity onPress={onPress}>
          <MaterialIcons name={icon} size={40} color="white" />
        </TouchableOpacity>
      )}
      {title && <AppText style={styles.text}>{title}</AppText>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default TitleBar;
