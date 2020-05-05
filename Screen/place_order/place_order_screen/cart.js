import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-paper";
import Header from "../place_order_comp/Header";
import BusinessInfoCard from "../../restaurant_home/restaurant_home_comp/RestaurantInfoCard";
import MenuCart from "../../restaurant_home/restaurant_home_comp/RestaurantMenu";
import CardTotalCost from "../place_order_comp/CardTotalCost";
import { ScrollView } from "react-native-gesture-handler";
export default class Card extends Component {
  render() {
    return (
      <View>
        <View style={styles.cardItems}>
          <Header settitle="Seleted Items" />
          <BusinessInfoCard />
          <ScrollView>
            <MenuCart />
            <MenuCart />
            <MenuCart />
            <MenuCart />
            <MenuCart />
            <MenuCart />
            <MenuCart />
          </ScrollView>
        </View>
        <View style={styles.bottobar}>
          <View>
            <CardTotalCost />
          </View>
          <View>
            <Button
              icon="map"
              mode="contained"
              color="green"
              style={{ padding: 5 }}
              onPress={() => console.log("Pressed")}
            >
              Select Address
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
Card.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon name="ios-cart" color={tintColor} size={25} />
  ),
};

const styles = StyleSheet.create({
  bottobar: {},
  cardItems: {
    height: "83%",
  },
});
