import React, { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { sub } from "react-native-reanimated";

export default useLocation = (shouldTrack, callback) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();

        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (error) {
        setError(error);
      }
    };
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);
  //once "shouldTrack" is turned "true" for recording
  //now function inside useEffect will not be called until "shouldTrack" value is changed
  //if this function inside useEffect need to record location changed in location array,
  //we need another callback to keep telling to record location.

  return [error];
};
