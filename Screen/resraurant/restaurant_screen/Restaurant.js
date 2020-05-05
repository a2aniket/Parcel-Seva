import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RestaurantHeader from "../restaurant_comp/RestaurantHedaer";
import SpecialMenuCart from "../restaurant_comp/SpecialMenuCart";
import RestauarantHeader from "../restaurant_comp/RestaurantHedaer";
import SpecialOfferCard from "../restaurant_comp/SpecialOfferCart";
import RestauarantListCard from "../restaurant_comp/RestaurantListCard";
const Restaurant = (props) => {
  return (
    <View>
      <RestaurantHeader />
      <SpecialMenuCart />
      <View style={styles.Bestoffer}>
        <Text style={styles.text}>Best offers</Text>
      </View>
      <RestauarantListCard navigation={props.navigation} />
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  Bestoffer: {
    padding: 7,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  SpecialOffer: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: "#F7F3F3",
  },

  RestauarantListCard: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
