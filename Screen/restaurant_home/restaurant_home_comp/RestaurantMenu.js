import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Card, IconButton, Colors, Button } from "react-native-paper";
import Dialog from "react-native-dialog";
import { ScrollView } from "react-native-gesture-handler";
const LeftContent = (props) => (
  <Button icon="plus" mode="contained" style={{ backgroundColor: "green" }}>
    Add
  </Button>
);

const MyComponent = () => {
  const [foodCounter, newFoodCounter] = useState(0);
  const [showCounter, newCounter] = useState(false);

  const LeftContent = () => {
    if (showCounter == false) {
      return (
        <Button
          icon="plus"
          mode="contained"
          onPress={() => newCounter(true)}
          style={{ backgroundColor: "green" }}
        >
          Add
        </Button>
      );
    } else {
      return (
        <View style={styles.counter}>
          <View>
            <Button
              icon="minus"
              color="red"
              onPress={() => lowCounter()}
            ></Button>
          </View>
          <View>
            <Text>{foodCounter}</Text>
          </View>
          <View>
            <Button
              icon="plus"
              color="green"
              onPress={() => hightCounter()}
            ></Button>
          </View>
        </View>
      );
    }
  };

  const lowCounter = () => {
    if (foodCounter <= 0) newCounter(false);
    else newFoodCounter(foodCounter - 1);
  };

  const hightCounter = () => {
    newFoodCounter(foodCounter + 1);
  };
  return (
    <View>
      <ScrollView>
        <View style={{ marginTop: 5 }}>
          <View>
            <Card>
              <Card.Title
                title="Hyderabad Biryani "
                subtitle="full 120 Rs"
                right={LeftContent}
              />
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MyComponent;

const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
