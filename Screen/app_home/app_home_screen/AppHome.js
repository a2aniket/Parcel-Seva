import React, { Component } from "react";
import { View, BackHandler } from "react-native";
import AppHomeHeader from "../app_home_comp/AppHomeHeader";
import ImageSliderComp from "../app_home_comp/ImageSlider";
import AppHomeProduct from "../app_home_comp/AppProduct";
import SnakeBar from "../app_home_comp/SnakeBar";

const AppHome = (props) => {
  return (
    <View>
      <AppHomeHeader />
      <ImageSliderComp />
      <AppHomeProduct navigation={props.navigation} />
      <View style={{ marginTop: "60%" }}>
        <SnakeBar />
      </View>
    </View>
  );
};

export default AppHome;
