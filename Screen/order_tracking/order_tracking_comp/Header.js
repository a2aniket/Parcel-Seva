import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

const Header = (props) => {
  return (
    <Appbar.Header style={styles.Header}>
      <Appbar.Content title={props.settitle} />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "white",
  },
});
