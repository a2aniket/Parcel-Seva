import * as React from "react";
import { View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const Googlepay = (props) => {
  return (
    <Avatar.Image
      size={30}
      style={{ backgroundColor: "white" }}
      source={require("../place_order_images/symbol.png")}
    />
  );
};

const AmazonPay = (props) => {
  return (
    <Avatar.Image
      size={30}
      style={{ backgroundColor: "white" }}
      source={require("../place_order_images/business.png")}
    />
  );
};

const cash = (props) => {
  return (
    <Avatar.Image
      size={30}
      style={{ backgroundColor: "white" }}
      source={require("../place_order_images/cash.png")}
    />
  );
};

const Paytm = (props) => {
  return (
    <Avatar.Image
      size={30}
      style={{ backgroundColor: "white" }}
      source={require("../place_order_images/logo.png")}
    />
  );
};

const PaymentMethos = (props) => (
  <View>
    <Card style={{ margin: 5 }}>
      <Card.Title title="Google Pay" left={Googlepay} />
    </Card>

    <Card style={{ margin: 5 }}>
      <Card.Title title="Amazon Pay" left={AmazonPay} />
    </Card>

    <Card style={{ margin: 5 }}>
      <Card.Title title="Paytm" left={Paytm} />
    </Card>

    <Card
      style={{ margin: 5 }}
      onPress={() => props.navigation.navigate("OrderTracking")}
    >
      <Card.Title title="Cash on Dilevery" left={cash} />
    </Card>
  </View>
);

export default PaymentMethos;
