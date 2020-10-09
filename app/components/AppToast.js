import React, { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

const AppToast = ({ message, makeVisible }) => {
  const [visibleToast, setVisibleToast] = useState(false);

  useEffect(() => setVisibleToast(false), [visibleToast]);

  makeVisible = () => {
    setVisibleToast(true);
  };
  return <Toast visible={visibleToast} message={message} />;
};

export default AppToast;
