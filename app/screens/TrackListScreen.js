import React, { useContext, useEffect } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Context } from "../context/TrackContext";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(Context);

  //reset the screen
  useEffect(() => {
    const getList = navigation.addListener("focus", () => {
      fetchTracks;
    });

    return getList;
  }, [navigation]);

  return (
    <>
      <Spacer>
        {/* <Text h3>TrackListScreen</Text> */}
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
