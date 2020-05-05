import React from "react";
import { Text, View, StyleSheet } from "react-native";

const VerifyOTPText = (props) => {
  console.log(props);
  return (
    <View style={styles.VerifyOTPText}>
      <View style={styles.title1View}>
        <Text style={styles.title1}>Mobile Verifaction Has</Text>
        <Text style={styles.title1}>Successfully Done!</Text>
      </View>
      <View style={styles.title2View}>
        <Text style={styles.title2}>We have send OTP on {props.otpNumber}</Text>
        <Text style={styles.title2}>Will apply 3 min </Text>
      </View>
    </View>
  );
};

export default VerifyOTPText;
const styles = StyleSheet.create({
  VerifyOTPText: {
    marginTop: "15%",
    alignItems: "center",
  },

  title1: {
    fontWeight: "bold",
    fontSize: 20,
  },

  title2View: {
    margin: "5%",
    alignItems: "center",
  },
  title2: {
    fontSize: 15,
  },
});
