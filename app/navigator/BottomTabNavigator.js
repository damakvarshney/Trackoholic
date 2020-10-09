import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackNavigator from "./TrackNavigator";
import AccountScreen from "./../screens/AccountScreen";
import Icon from "./../components/Icon";
import AppText from "./../components/AppText";
import { View } from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import rootNavigation from "../navigator/rootNavigation";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={TrackNavigator}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" color={colors.brightPurple} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={TrackCreateScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate("Create")} />
          ),
        })}
      />
      <Tab.Screen
        name="You"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons
              name="person"
              color={colors.brightPurple}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
