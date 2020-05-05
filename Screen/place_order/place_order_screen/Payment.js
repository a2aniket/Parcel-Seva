import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PaymentTotalCost from "../place_order_comp/PaymentTotelCost";
import Header from "../place_order_comp/Header";
import PaymentMethod from "../place_order_comp/PaymentMethod";

const Payment = (props) => {
  return (
    <View>
      <PaymentTotalCost />
      <Header settitle={"Select Payment Method"} />
      <PaymentMethod navigation={props.navigation} />
    </View>
  );
};

export default Payment;
Payment.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon name="ios-card" color={tintColor} size={25} />
  ),
};
