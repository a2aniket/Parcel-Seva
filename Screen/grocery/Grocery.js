import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../Header/Header";
import { Button, TextInput } from "react-native-paper";
const Grocery = () => {
  return (
    <View style={styles.screen}>
      <Header settitle={"Grocery"} />
      <View style={styles.captureList}>
        <Button
          icon="camera"
          mode="contained"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          Upload Your Grocery List
        </Button>
      </View>
      <View style={styles.typeList}>
        <TextInput label="Type Your Grocery List" style={{ height: "80%" }} />
      </View>
      <View style={styles.Order}>
        <Button
          mode="contained"
          color="green"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          Order from Store
        </Button>
      </View>
    </View>
  );
};

export default Grocery;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  captureList: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "black",
    borderWidth: 1,
  },

  typeList: {
    height: "51%",
    margin: 10,
  },

  Order: {
    height: "8%",
  },
});
