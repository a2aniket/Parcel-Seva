import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from "react-native-paper";
const PackageDetils = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.packageInformationView}>
        <Text style={styles.packageInformationText}> Addres Information</Text>
      </View>
      <View style={styles.inputAddesView}>
        <Button
          icon="pin"
          mode="outlined"
          color="#707576"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          PickUp Address
        </Button>
      </View>
      <View style={styles.inputAddesView}>
        <Button
          icon="pin"
          mode="outlined"
          color="#707576"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          Dilvery Address
        </Button>
      </View>

      <View style={styles.packageInformationView}>
        <Text style={styles.packageInformationText}> Product Deatils</Text>
      </View>
      <View style={styles.inputAddesView}>
        <Button
          icon="package"
          mode="outlined"
          color="#707576"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          Product Name
        </Button>
      </View>

      <View style={styles.packageInformationView}>
        <Text style={styles.packageInformationText}> Contact Deatils</Text>
      </View>
      <View style={styles.inputAddesView}>
        <Button
          icon="phone"
          mode="outlined"
          color="#707576"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          Senders
        </Button>
      </View>

      <View style={styles.inputAddesView}>
        <Button
          icon="phone"
          mode="outlined"
          color="#707576"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          Recivers
        </Button>
      </View>
      <View style={styles.packageInformationView}>
        <Text style={styles.packageInformationText}> Payment Deatils</Text>
      </View>
      <View style={styles.inputAddesView}>
        <Button
          icon="card"
          mode="outlined"
          color="#707576"
          style={{ padding: 10 }}
          onPress={() => console.log("Pressed")}
        >
          Payment method
        </Button>
      </View>
      <View style={styles.inputAddesView}>
        <Button
          mode="contained"
          color="green"
          style={{ padding: 8 }}
          onPress={() => console.log("Pressed")}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

export default PackageDetils;

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center" },
  packageInformationView: {
    backgroundColor: "#2CDCEA",
    height: 50,
    width: "94%",
    justifyContent: "center",
    borderRadius: 10,
  },

  packageInformationText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },

  inputAddesView: { width: "90%", margin: 10 },
});
