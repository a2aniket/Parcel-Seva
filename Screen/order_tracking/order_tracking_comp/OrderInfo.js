import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const OrderInfo = () => (
  <Card style={{ width: "90%" }}>
    <Card.Content>
      <Title>Delivery Details</Title>
      <Paragraph>Delivery Id: ........</Paragraph>
      <Paragraph>Delivery Boy : ........</Paragraph>
      <Paragraph>Delivery vehicle : ........</Paragraph>
      <Paragraph>Delivery vehicle Id : ........</Paragraph>
      <Paragraph>Payment Status : ........</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        icon="phone"
        mode="contained"
        style={{ width: "100%" }}
        onPress={() => console.log("Pressed")}
      >
        Contact Delivery Boy
      </Button>
    </Card.Actions>
  </Card>
);

export default OrderInfo;
