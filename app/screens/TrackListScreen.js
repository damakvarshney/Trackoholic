import React, { useContext, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import colors from "../config/colors";
import { Context as TrackContext } from "../context/TrackContext";
import ListItem from "./../components/lists/ListItem";
import AppIcon from "../components/AppIcon";
import ListItemSeparator from "./../components/lists/ListItemSeparator";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    const getList = navigation.addListener("focus", () => {
      fetchTracks();
    });
    return getList;
  }, [navigation]);

  console.log(state);

  return (
    <View style={styles.container}>
      <AppIcon />
      <View
        style={{
          backgroundColor: colors.white,
          borderRadius: 25,

          height: "85%",
          width: "100%",
          padding: 5,
        }}
      >
        <View
          style={{
            backgroundColor: colors.brightPurple,
            borderRadius: 25,
            flex: 1,
            height: "85%",
            width: "100%",
            padding: 5,
          }}
        >
          <View style={styles.trackContainer}>
            <FlatList
              data={state}
              keyExtractor={(item) => item._id}
              ItemSeparatorComponent={ListItemSeparator}
              renderItem={({ item }) => (
                <ListItem
                  materialIconName="chevron-right"
                  title={item.name}
                  onPress={() =>
                    navigation.navigate("TrackDetail", { track: item })
                  }
                />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brightPurple,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  trackContainer: {
    height: "85%",
    width: "100%",
    flex: 1,
    backgroundColor: colors.light,
    borderRadius: 25,
  },
});

export default TrackListScreen;
