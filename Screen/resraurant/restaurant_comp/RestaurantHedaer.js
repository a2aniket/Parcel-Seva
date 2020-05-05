import React from "react";
import { Appbar } from "react-native-paper";

const RestauarantHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "white" }}>
      <Appbar.BackAction />
      <Appbar.Content title="Restauarant's" subtitle="In your city" />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default RestauarantHeader;
