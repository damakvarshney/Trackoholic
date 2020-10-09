import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./../components/AppText";
import AppButton from "./../components/AppButton";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/travel1.jpg")} style={styles.image} />

      <View style={styles.loginContainer}>
        <AppText style={styles.detail}>
          {"Your privacy is our Priority."}
        </AppText>
        <FontAwesome5 name="map-marker-alt" size={30} color="white" />
        <AppText style={styles.text}>Trackoholic</AppText>
        <AppText style={styles.detail}>
          {
            "Trackoholic allows user to track all route \n and share them all with your Friends."
          }
        </AppText>
        <AppButton
          buttonStyle={styles.button}
          title="SIGN OUT"
          titleColor={colors.brightPurple}
          onPress={() => signout()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: "flex-start",
    alignItems: `center`,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
  loginContainer: {
    position: "absolute",
    height: "40%",
    bottom: 0,
    alignSelf: "baseline",
    backgroundColor: colors.brightPurple,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    alignSelf: "center",
  },
  button: {
    fontSize: 16,
    backgroundColor: colors.white,
  },
  detail: {
    fontSize: 12,
    color: colors.white,
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 20,
  },
});

export default AccountScreen;
