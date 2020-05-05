import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const OtpInput = (props) => {
  const [number, newNumber] = useState();

  const addNumber = (enterdeNumber) => {
    newNumber(enterdeNumber);
  };
  return (
    <View style={styles.enterdeNumber}>
      <View style={styles.enterdeNumberView}>
        <TextInput
          placeholder="Enter your Number"
          keyboardType="numeric"
          maxLength={10}
          style={styles.enterNumberFild}
          onChangeText={addNumber}
        />
      </View>
      <View style={{ width: "70%", marginTop: "5%" }}>
        <Button
          title="send"
          onPress={() => props.navigation.navigate("VerifyOTP", { number })}
        />
      </View>
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  enterdeNumber: {
    alignItems: "center",
  },
  enterdeNumberView: {
    alignItems: "center",
    width: "100%",
  },

  enterNumberFild: {
    padding: "2%",
    fontSize: 20,
    fontWeight: "bold",
    width: "70%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    textAlign: "center",
  },

  sendButtonView: {
    alignItems: "center",
    justifyContent: "space-around",
  },

  sendButton: {},
});
