import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../Header/Header";
import PackageDetails from "../send_package_comp/PackageDetails";
import { ScrollView } from "react-native-gesture-handler";
const SendPackage = () => {
  return (
    <View style={styles.screen}>
      <Header settitle={"Send Package"} />
      <ScrollView>
        <View style={styles.PackageDetails}>
          <PackageDetails />
        </View>
      </ScrollView>
    </View>
  );
};

export default SendPackage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  PackageDetails: { height: "50%" },
});
