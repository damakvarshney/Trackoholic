import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function AppButton({
  title,
  onPress,
  color = "purple",
  titleColor,
  buttonStyle,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }, buttonStyle]}
    >
      <Text style={[styles.text, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "100%",
    marginVertical: 10,
  },

  text: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
  },
});
