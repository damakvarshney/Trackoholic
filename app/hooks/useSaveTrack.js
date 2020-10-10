import { useContext } from "react";

import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import rootNavigation from "../navigator/rootNavigation";
export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);

    reset();

    rootNavigation.navigate("TrackList");
  };

  return [saveTrack];
};
