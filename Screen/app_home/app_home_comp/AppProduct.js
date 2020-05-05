import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import RestauarantHeader from "../../resraurant/restaurant_comp/RestaurantHedaer";

const productComp = (props) => {
  return (
    <View style={styles.AppProduct}>
      <View style={styles.sendPakageCardView}>
        <Card
          style={styles.sendPakageCard}
          onPress={() => props.navigation.navigate("SendPackage")}
        >
          <View style={styles.productInfoView}>
            <View style={styles.productImageView}>
              <Image
                source={require("../app_home_images/package.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
            <View style={styles.productText}>
              <Text>
                <Title>Send package</Title>
              </Text>
              <Paragraph>On Local Demand</Paragraph>
            </View>
          </View>
        </Card>
      </View>

      <View style={styles.subProduct}>
        <View style={styles.restaurantCardView}>
          <Card
            style={styles.restaurantCard}
            onPress={() => props.navigation.navigate("Restaurant")}
          >
            <View style={styles.restaurantProdctInfo}>
              <View style={styles.restaurantImageView}>
                <Image
                  source={require("../app_home_images/waiter.png")}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={styles.restaurantText}>
                <Text>
                  <Title>Restaurant</Title>
                </Text>
                <Paragraph>Get Food</Paragraph>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.groceryCardView}>
          <Card
            style={styles.groceryCard}
            onPress={() => props.navigation.navigate("Grocery")}
          >
            <View style={styles.groceryProductInfo}>
              <View style={styles.groceryImageView}>
                <Image
                  source={require("../app_home_images/grocery.png")}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={styles.groceryText}>
                <Text>
                  <Title>Grocery</Title>
                </Text>
                <Paragraph>Daily Neds</Paragraph>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default productComp;

const styles = StyleSheet.create({
  AppProduct: {
    marginTop: "5%",
  },
  sendPakageCardView: {
    alignItems: "center",
  },
  sendPakageCard: {
    width: "90%",
    padding: "5%",
    borderBottomColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  productImageView: {
    padding: "1%",
  },

  productInfoView: {
    flexDirection: "row",
  },

  productText: {
    marginLeft: "5%",
  },

  subProduct: {
    width: "100%",
    marginTop: "4%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  restaurantCardView: {
    width: "50%",
  },
  restaurantCard: {
    padding: "5%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: "2.5%",
  },

  restaurantProdctInfo: {
    flexDirection: "row",
  },

  restaurantText: {
    paddingLeft: "5%",
  },
  groceryCardView: {
    width: "45%",
  },

  groceryCard: {
    marginLeft: "2.5%",
    padding: "5%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginRight: "2.5%",
  },

  groceryProductInfo: {
    flexDirection: "row",
  },

  groceryText: {
    paddingLeft: "8%",
  },
});
