import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import colors from "../config/colors";
import { Context } from "../context/AuthContext";

import AppButton from "./../components/AppButton";
import TitleBar from "./../components/TitleBar";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.png")}
    >
      <TitleBar title="Track Me" titleBarStyle={{ margin: 15 }} />
      <View style={styles.buttonContainer}>
        <AppButton
          title="Register"
          color="white"
          titleColor={colors.purple}
          onPress={() => navigation.replace("SignUp")}
        />
        <AppButton
          title="Login"
          titleColor={colors.white}
          buttonStyle={{ borderWidth: 1, borderColor: colors.white }}
          onPress={() => navigation.replace("SignIn")}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "100%",
    height: "55%",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    padding: 20,
  },
});

export default WelcomeScreen;
