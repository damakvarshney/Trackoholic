import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import SignInScreen from "./app/screens/SignInScreen";
import BottomTabNavigator from "./app/navigator/BottomTabNavigator";
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from "./app/context/AuthContext";
import ResolveAuthScreen from "./app/screens/ResolveAuthScreen";
import { navigationRef } from "./app/navigator/rootNavigation";
import { StatusBar } from "react-native";
import {
  Context as LocationContext,
  Provider as LocationProvider,
} from "./app/context/LocationContext";

const Stack = createStackNavigator();

const App = () => {
  const { tryLocalSignIn } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return (
    <>
      <StatusBar />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Resolve" component={ResolveAuthScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LocationProvider>
  );
};
