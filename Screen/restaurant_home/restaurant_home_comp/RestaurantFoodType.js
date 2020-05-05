import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
const RestaurantFoodType = () => {
  return (
    <View style={styles.Top}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.SpecialMenu}>
          <Card
            style={{
              flex: 1,
              backgroundColor: "#E1DEDE",
              padding: 7,
              margin: 10,
              borderRadius: 20,
            }}
          >
            <Text>Indian</Text>
          </Card>

          <Card
            style={{
              flex: 1,
              backgroundColor: "#E1DEDE",
              padding: 7,
              margin: 10,
              borderRadius: 20,
            }}
          >
            <Text>Soups</Text>
          </Card>

          <Card
            style={{
              flex: 1,
              backgroundColor: "#E1DEDE",
              padding: 7,
              margin: 10,
              borderRadius: 20,
            }}
          >
            <Text>Chinese</Text>
          </Card>

          <Card
            style={{
              flex: 1,
              backgroundColor: "#E1DEDE",
              padding: 7,
              margin: 10,
              borderRadius: 20,
            }}
          >
            <Text>Quick Bites</Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantFoodType;

const styles = StyleSheet.create({
  SpecialMenu: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 2,
  },
});
