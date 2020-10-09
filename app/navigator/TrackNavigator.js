import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrackDetailScreen from "./../screens/TrackDetailScreen";
import TrackListScreen from "./../screens/TrackListScreen";

const Stack = createStackNavigator();

export default function TrackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}
