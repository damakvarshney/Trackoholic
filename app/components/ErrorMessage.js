import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontSize: 14,
  },
});
export default ErrorMessage;
