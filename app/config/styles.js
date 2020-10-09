import { Platform } from "react-native";
import colors from "../config/colors";

export default {
  text: {
    color: colors.dark,
    fontSize: 18,
    padding: 2,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
