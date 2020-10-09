import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import * as rootNavigation from "../navigator/rootNavigation";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup/in":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return {
        ...state,
        errorMessage: "",
      };
    case "signout":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }, callback) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup/in", payload: response.data.token });
    if (callback) {
      callback();
    }
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong.",
    });
    console.log(error.response.data);
  }
  //make api request to signup with that email and password
  //if we signup, modify our state , and say that we are authenticated
  //if signing up fails, we probably need to reflect an error message
  //somewhere
};

const signin = (dispatch) => async ({ email, password }, callback) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup/in", payload: response.data.token });
    if (callback) {
      callback();
    }
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong.",
    });
    console.log(error.response.data);
  }

  //Try to signin
  //Handle success by updating state
  //Handle failure by showing error message (somehow)
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signup/in", payload: token });
    rootNavigation.replace("Main");
  } else {
    rootNavigation.replace("Welcome");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("Token");

  dispatch({ type: "signout" });
  rootNavigation.replace("Welcome");
  //somehow sign out !!
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, tryLocalSignIn, clearErrorMessage, signout },
  { token: null, errorMessage: "" }
);
