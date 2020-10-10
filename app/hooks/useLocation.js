import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  let subscriber;

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();

      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );

      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
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
      subscriber = null;
    };
  }, [shouldTrack, callback]);

  return [error];
};
