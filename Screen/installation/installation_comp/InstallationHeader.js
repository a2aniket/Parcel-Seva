import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

const InstallationHeader = (props) => {
  return (
    <Appbar.Header style={styles.Header}>
      <Appbar.Content title={props.headerTitle} />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default InstallationHeader;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "white",
  },
});
