import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  materialIconName,
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.userContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subtitle && (
              <AppText numberOfLines={2} style={styles.listing}>
                {subtitle}
              </AppText>
            )}
          </View>
          {materialIconName && (
            <MaterialCommunityIcons
              style={styles.materialIcon}
              name={materialIconName}
              size={24}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 25,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    alignSelf: "center",
  },
  userContainer: {
    padding: 5,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    marginBottom: 7,
    fontWeight: "600",
  },
  listing: {
    color: colors.medium,
    fontWeight: "100",
  },
  materialIcon: {
    alignSelf: "center",
    color: colors.medium,
  },
});

export default ListItem;
