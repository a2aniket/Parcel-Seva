import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  AsyncStorage,
} from "react-native";
import VerifyFailf from "./VerifyFaild";

const EnterOTP = (props) => {
  const [number, newNumber] = useState();
  const [otp, newOtp] = useState(5656);
  const [session, newSession] = useState(false);

  const addNumber = (enterdeNumber) => {
    newNumber(enterdeNumber);
  };

  function otpCheck() {
    if (number == otp) {
      console.log("right");
      saveData();
      newSession(false);
      props.navigation.navigate("AppHome");
    } else {
      newSession(true);
      console.log("false");
    }
  }

  saveData = () => {
    let user = props.otpNumber;
    AsyncStorage.setItem("user", user);
  };

  return (
    <View styles={styles.enterOTP}>
      <View style={styles.enterOTPView}>
        <TextInput
          placeholder="Enter OTP"
          keyboardType="numeric"
          maxLength={4}
          style={styles.enterOTPFild}
          onChangeText={addNumber}
        />
      </View>
      {session ? (
        <View style={{ alignItems: "center" }}>
          <VerifyFailf />
        </View>
      ) : null}
      <View style={styles.resendOtpText}>
        <Text>if you dont resive code? </Text>
        <Text
          style={styles.resend}
          onPress={() => props.navigation.navigate("Home")}
        >
          Resend
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View
          style={{
            width: "50%",
          }}
        >
          <Button title="Verify OTP" onPress={() => otpCheck()} />
        </View>
      </View>
    </View>
  );
};

export default EnterOTP;

const styles = StyleSheet.create({
  enterOTP: {
    alignItems: "center",
    marginTop: "5%",
  },

  enterOTPView: {
    alignItems: "center",
  },

  enterOTPFild: {
    paddingTop: "2%",
    padding: "2%",
    width: "50%",
    fontSize: 20,
    textAlign: "center",
    borderColor: "black",
    borderBottomWidth: 1,
  },

  resendOtpText: {
    marginTop: "2%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonContainer: {
    marginTop: "3%",
    alignItems: "center",
    width: "100%",
  },
  resend: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
  },
});
1;
