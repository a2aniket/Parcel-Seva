import React from "react";
import { View, AsyncStorage } from "react-native";
import InstallationHedaer from "../installation_comp/InstallationHeader";
import VerifyOTPText from "../installation_comp/VerifyOTPText";
import EnterOTP from "../installation_comp/EnterOTP";
const VerifyOTP = (props) => {
  let number = props.navigation.getParam("number");
  return (
    <View>
      <InstallationHedaer headerTitle={"Verify Account"} />
      <VerifyOTPText otpNumber={number} />
      <EnterOTP navigation={props.navigation} otpNumber={number} />
    </View>
  );
};

export default VerifyOTP;
