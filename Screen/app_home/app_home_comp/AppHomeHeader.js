import React from "react";
import { Appbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const AppHomeHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "white" }}>
      <Ionicons
        name="md-locate"
        size={30}
        color="red"
        style={{ marginLeft: 10 }}
      />
      <Appbar.Content title="Pune" subtitle="Your Location Is" />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default AppHomeHeader;
