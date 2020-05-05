import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import OrderTrackingStatus from "../order_tracking_comp/OrderStatusCard";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }

  onNextStep(count) {
    var percent = (count / 5) * 100;
    console.log(count + "::::::" + percent);
    this.setState({
      progress: percent,
    });
  }

  onSubmit() {
    console.log("::::::");
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressSteps>
          <ProgressStep
            label="confirming"
            onNext={() => {
              this.onNextStep(1);
            }}
          >
            <View style={{ alignItems: "center" }}>
              <OrderTrackingStatus />
            </View>
          </ProgressStep>
          <ProgressStep
            label="being prepared"
            onNext={() => {
              this.onNextStep(2);
            }}
          >
            <View style={{ alignItems: "center" }}>
              <OrderTrackingStatus />
            </View>
          </ProgressStep>
          <ProgressStep
            label="on way"
            onNext={() => {
              this.onNextStep(3);
            }}
          >
            <View style={{ alignItems: "center" }}>
              <OrderTrackingStatus />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Food is arriving"
            onNext={() => {
              this.onNextStep(4);
            }}
          >
            <View style={{ alignItems: "center" }}>
              <OrderTrackingStatus />
            </View>
          </ProgressStep>
          <ProgressStep
            label=""
            onNext={() => {
              this.onNextStep(5);
            }}
            onSubmit={() => {
              this.onSubmit();
            }}
          >
            <View style={{ alignItems: "center" }}></View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
