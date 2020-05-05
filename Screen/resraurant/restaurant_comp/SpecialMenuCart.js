import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
const SpecialMenuCart = () => {
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
            <Text>Chicken Biryani</Text>
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
            <Text>Pizza</Text>
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
            <Text>Chole bhature</Text>
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
            <Text>Paneer butter masala</Text>
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
            <Text>Burger</Text>
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
            <Text>Chicken lajawab</Text>
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
            <Text>Cake</Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default SpecialMenuCart;

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
