import React from "react";
import { View } from "react-native";
import OrderTrackingBar from "../order_tracking_comp/OrderProgressBar";
import OrderInfo from "../order_tracking_comp/OrderInfo";
import Header from "../order_tracking_comp/Header";
const OrderTracking = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header settitle={"Track your Order"} />
      <View style={{ height: "50%" }}>
        <OrderTrackingBar />
      </View>
      <View
        style={{
          alignItems: "center",
          height: "50%",
        }}
      >
        <OrderInfo />
      </View>
    </View>
  );
};

export default OrderTracking;
