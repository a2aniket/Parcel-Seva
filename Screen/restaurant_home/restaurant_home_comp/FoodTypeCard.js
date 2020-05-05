import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FoodTypeCard = () => {
  return (
    <View style={styles.Bestoffer}>
      <Text style={styles.text}>Chinese</Text>
    </View>
  );
};

export default FoodTypeCard;

const styles = StyleSheet.create({
  Bestoffer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 7,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
