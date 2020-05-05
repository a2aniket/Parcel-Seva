import React from "react";
import { View, StyleSheet, Text } from "react-native";

const VerifyFailf = () => {
  return (
    <View style={styles.invalidTextView}>
      <Text style={styles.invalidText}>Invalid OTP Pless tru again</Text>
    </View>
  );
};

export default VerifyFailf;

const styles = StyleSheet.create({
  invalidText: {
    alignItems: "center",
  },

  invalidText: {
    color: "red",
  },
});
