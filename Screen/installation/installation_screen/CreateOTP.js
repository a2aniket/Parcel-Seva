import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import InstallationHeader from "../installation_comp/InstallationHeader";
import CreateAccountText from "../installation_comp/CreateAccountText";
import EnterMobileNumber from "../installation_comp/EnterMobileNumber";

const CreateOtp = (props) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding ">
      <ScrollView>
        <View>
          <InstallationHeader headerTitle={"Create Account"} />
          <CreateAccountText />
          <EnterMobileNumber navigation={props.navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateOtp;
