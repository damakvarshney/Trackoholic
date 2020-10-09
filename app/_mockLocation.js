import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;
let counter = 0;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 78.086341 + increment * tenMetersWithDegrees,
      latitude: 27.8917234 + increment * tenMetersWithDegrees,
    },
  };
};

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });

  counter++;
}, 1000);
