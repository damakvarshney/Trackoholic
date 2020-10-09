import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import Or from "../components/Or";
import TitleBar from "../components/TitleBar";
import AppActivityIndicator from "./../components/AppActivityIndicator";
import colors from "../config/colors";
import AppButton from "./../components/AppButton";
import AppText from "./../components/AppText";
import AppTextInput from "./../components/AppTextInput";
import { Context as AuthContext } from "../context/AuthContext";
import ErrorMessage from "./../components/ErrorMessage";

const SignInScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [makeVisible, setMakeVisible] = useState(false);

  //reset the screen
  useEffect(() => {
    const reset = navigation.addListener("focus", () => {
      setEmail("");
      setPassword("");
      clearErrorMessage();
    });

    return reset;
  }, [navigation]);

  return (
    <>
      {state.errorMessage && makeVisible ? null : (
        <AppActivityIndicator visible={makeVisible} />
      )}
      <ImageBackground
        style={styles.container}
        source={require("../assets/background.png")}
      >
        <TitleBar
          icon="navigate-before"
          onPress={() => navigation.navigate("Welcome")}
          titleBarStyle={{ marginTop: StatusBar.currentHeight }}
        />
        <AppText style={styles.heading}>{"Welcome\nBack"}</AppText>
        <KeyboardAvoidingView style={styles.loginContainer}>
          <View>
            <AppText style={styles.login}>Log In</AppText>
            <AppTextInput
              icon="email"
              placeholder="Email"
              width="100%"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              autoCapitalization={false}
              onChangeText={(newEmail) => setEmail(newEmail)}
            />
            <AppTextInput
              secureTextEntry
              icon="vpn-key"
              placeholder="Password"
              width="100%"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
            {state.errorMessage ? (
              <ErrorMessage
                error={state.errorMessage}
                visible={state.errorMessage}
              />
            ) : null}
            <AppButton
              title="Log In"
              titleColor={colors.white}
              onPress={() => {
                setMakeVisible(true);
                signin({ email, password }, () => {
                  navigation.replace("Main");
                  setMakeVisible(false);
                });
              }}
            />
            <Or />
            <AppButton
              title="Register"
              color="white"
              titleColor={colors.purple}
              buttonStyle={{ borderWidth: 1, borderColor: colors.purple }}
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 25,
    marginLeft: 15,
  },
  login: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.purple,
    marginBottom: 10,
  },
  loginContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "baseline",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    justifyContent: "flex-end",
    padding: 20,
  },
});

export default SignInScreen;
