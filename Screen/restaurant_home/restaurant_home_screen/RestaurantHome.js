import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../restaurant_home_comp/Hedaer";
import RestaurantInfoCard from "../restaurant_home_comp/RestaurantInfoCard";
import RestaurantMenu from "../restaurant_home_comp/RestaurantMenu";
import { Button } from "react-native-paper";
import FoodTypeCard from "../restaurant_home_comp/FoodTypeCard";
import RestaurantFoodType from "../restaurant_home_comp/RestaurantFoodType";

const RestaurantHome = (props) => {
  return (
    <View>
      <Header />
      <RestaurantInfoCard />
      <RestaurantFoodType />
      <FoodTypeCard />
      <View style={styles.RestaurantMenu}>
        <RestaurantMenu />
      </View>
      <View>
        <Button
          icon="cart"
          mode="contained"
          style={{ padding: 5, margin: 5 }}
          onPress={() => props.navigation.navigate("Card")}
        >
          View Card
        </Button>
      </View>
    </View>
  );
};

export default RestaurantHome;

const styles = StyleSheet.create({
  RestaurantMenu: {
    margin: 10,

    height: "50%",
  },
});
