import React, { useState, Component } from "react";
import { View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class ImageSliderComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("../app_home_images/s1.jpg"),
        require("../app_home_images/s2.jpg"),
        require("../app_home_images/s3.jpg"),
        require("../app_home_images/s4.jpg"), // Network image          // Local image
      ],
    };
  }
  render() {
    return (
      <View onLayout={this.onLayout}>
        <SliderBox
          autoplay
          circleLoop
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          parentWidth={this.state.width}
          ImageComponentStyle={{
            borderRadius: 15,
            width: "95%",
            marginTop: "6%",
          }}
        />
      </View>
    );
  }
}
