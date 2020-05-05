import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Title } from "react-native-paper";

const CreateAccountText = () => {
  return (
    <View style={styles.CreateAccountText}>
      <View style={styles.otpImageView}>
        <Image
          source={require("../installation_images/OTP.jpg")}
          style={styles.otpImage}
        />
      </View>
      <View style={styles.otpTextTitle}>
        <Text style={styles.title}>Enter your Mobile Number to</Text>
        <Text style={styles.title}>create Account</Text>
      </View>

      <View style={styles.otpTextsubtitle}>
        <Text style={styles.subTitle}>We will send you One Time</Text>
        <Text style={styles.subTitle}>Password(OTP)</Text>
      </View>
    </View>
  );
};

export default CreateAccountText;

const styles = StyleSheet.create({
  CreateAccountText: {
    margin: "10%",
  },
  otpImage: {
    height: 200,
    width: 200,
  },

  otpImageView: {
    alignItems: "center",
  },

  otpTextTitle: {
    marginTop: "5%",
    marginBottom: "5%",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 15,
  },
  otpTextsubtitle: {
    alignItems: "center",
  },
});
