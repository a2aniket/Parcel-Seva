import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput, Button } from "react-native-paper";
export default class Address extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
        <View style={styles.AddressDetail}>
          <View>
            <TextInput label="Dilevery Location" mode="flat" />
          </View>
          <View style={styles.lowerAddress}>
            <TextInput
              label="House/Flat/Block No"
              mode="flat"
              style={styles.lowerText}
            />
            <TextInput label="Landmark" mode="flat" style={styles.lowerText} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 10,
            }}
          >
            <Button icon="home" onPress={() => console.log("Pressed")}>
              Home
            </Button>

            <Button icon="windows" onPress={() => console.log("Pressed")}>
              Work Place
            </Button>

            <Button icon="pin" onPress={() => console.log("Pressed")}>
              other
            </Button>
          </View>
          <View>
            <Button
              icon="card"
              mode="contained"
              onPress={() => console.log("Pressed")}
              color="green"
              style={{ padding: 4 }}
            >
              proced to Payment
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: "60%",
  },
  AddressDetail: {
    height: "50%",
    width: "100%",
  },
  lowerAddress: {
    height: "30%",
    margin: 10,
    alignItems: "center",
  },

  lowerText: {
    width: "90%",
    backgroundColor: "white",
  },
});

Address.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon name="md-map" color={tintColor} size={25} />
  ),
};
