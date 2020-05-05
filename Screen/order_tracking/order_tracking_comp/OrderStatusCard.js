import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Text, View } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const OrderTrackingStatus = () => (
  <Card>
    <Card.Content>
      <Title style={{ color: "bule" }}>Confirming Order from resturant</Title>
      <Paragraph>Placed Time: 11.06am</Paragraph>
      <Paragraph>Delivery Time: 20 min</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        icon="close"
        mode="text"
        color="red"
        onPress={() => console.log("Pressed")}
      >
        Cancle Order
      </Button>
    </Card.Actions>
  </Card>
);

export default OrderTrackingStatus;
