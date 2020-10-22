# Trackoholic

A tracking app with the following features:

- Authentication with Signin / Signup screens
- Allows user to track their position and plots the route on map
- Allows users to save a track to their account
- Lists all saved tracks
- See more details on a saved track
- Account Screen / Signout

The backend is using mongoDB to help provide a set of CRUD services which the APP uses.

## Installation

Within both the `/app` & `/server` directory install the npm packages with:

    npm install

## Running the application

### The App

Within `/app`

Run the following command to start the application. This will use [expo.io](https://expo.io/) to build the application ready to be tested on iOS or Android. You can use the Expo app on either the iOS or Google Play store. Alternatively you can run the application using the simulator.

    npm start

### The Backend

The backend is being powered with mongoDB. You will need to create an account at [cloud.mongodb.com](https://cloud.mongodb.com/). Then create a new cluster and follow the instructions along with 'Connect the Cluster' to 'your application'.

Once you have the connection string. E.g `mongodb+srv://**<user_name>**:**<password>**@cluster0.qr24r.mongodb.net/**<dbname>**?retryWrites=true&w=majority`

Within `/server/src/index.js`, Add your connection string to line 16.

Then run the following command to start the server which connects to mongoDB:
npm run db

## ngrok

If your testing on a real device and having issue connecting to the local json-server, then you may want to run ngrok. This will give you a real URL that points to the local version of json-server running on post 3000.

### To start ngrok

Run:

    npm run tunnel

Then within `/app/src/api/tracker.js`. Update `http://localhost:3000` with the "Forwarding" address that ngrok provided.

## ScreenShots

These all are the screenshots related to Trackoholic, ranging from SplashScreen to Account Screen. All Screens are designed in `@AdobeXD`.

### SplashScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/SplashScreen.png?raw=true "SplashScreen")

### WelcomeScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/WelcomeScreen.png?raw=true "SplashScreen")

### RegisterScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/RegisterScreen.png?raw=true "SplashScreen")

### LoginScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/LoginScreen.png?raw=true "SplashScreen")

### LoadingScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/LoadingScreen.png?raw=true "SplashScreen")

### KeyBoardAvoidingView
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/KeyBoardAvoidingView.png?raw=true "SplashScreen")

### TrackCreateScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/TrackCreateScreen.png?raw=true "SplashScreen")

### TrackListScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/Android%20Emulator%20-%20R_play_5554%2010_12_2020%206_43_09%20PM.png?raw=true "SplashScreen")

### TrackDetailScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/Android%20Emulator%20-%20R_play_5554%2010_12_2020%206_43_53%20PM.png?raw=true "SplashScreen")

### AccountScreen
![Alt text](https://github.com/damakvarshney/Trackoholic/blob/master/ScreenShots/AccountScreen.png?raw=true "SplashScreen")



