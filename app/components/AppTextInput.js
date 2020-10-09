import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TextInput } from "react-native-gesture-handler";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, width, ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 30,
    flexDirection: "row",
    padding: 10,
  },
  icon: {
    marginRight: 10,
    paddingTop: 5,
  },
});

export default AppTextInput;
