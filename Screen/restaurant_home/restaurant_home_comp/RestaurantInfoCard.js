import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

const RestaurantListCard = () => (
  <View>
    <Card>
      <View style={styles.cardTitle}>
        <View>
          <Image
            source={require("../restaurant_home_images/rest.jpg")}
            style={{ width: 80, height: 80 }}
          />
        </View>

        <View>
          <Card.Content>
            <Title>Hotel Torna</Title>
            <Paragraph>Fast Food,Snacks,Street Food</Paragraph>
            <Paragraph>Fc rood</Paragraph>
          </Card.Content>
        </View>
      </View>
      <Card.Actions>
        <View style={styles.bottomCard}>
          <Button
            icon="wallet"
            mode="text"
            onPress={() => console.log("Pressed")}
          >
            Save 50%
          </Button>

          <Button
            icon="door-closed"
            mode="text"
            color="red"
            onPress={() => console.log("Pressed")}
          >
            closed
          </Button>

          <Button
            icon="food-fork-drink"
            mode="text"
            color="green"
            onPress={() => console.log("Pressed")}
          >
            Only Veg
          </Button>
        </View>
      </Card.Actions>
    </Card>
  </View>
);

export default RestaurantListCard;

const styles = StyleSheet.create({
  cardTitle: { flexDirection: "row", margin: 10 },
  bottomCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardBottom: {},

  status: {},

  restaurantType: {},
});
