import { ImageBackground } from "react-native";
import AppActivityIndicator from "../components/AppActivityIndicator";

import React from "react";

const ResolveAuthScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/splash.png")}
      style={{ flex: 1 }}
    >
      <AppActivityIndicator visible={true} />
    </ImageBackground>
  );
};

export default ResolveAuthScreen;
