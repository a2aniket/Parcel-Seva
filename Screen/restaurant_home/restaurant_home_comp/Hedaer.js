import React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "white" }}>
      <Appbar.BackAction />
      <Appbar.Content title="" subtitle="" />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default Header;
