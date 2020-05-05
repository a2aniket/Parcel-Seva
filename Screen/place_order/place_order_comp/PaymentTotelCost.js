import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PaymentTotalCost = () => (
  <Card style={{ backgroundColor: "#E6E8E7" }}>
    <Card.Content>
      <Paragraph>Sub Total</Paragraph>
      <Paragraph>Taxes</Paragraph>
      <Paragraph>Charges</Paragraph>
      <Paragraph>Total Cost</Paragraph>
    </Card.Content>
  </Card>
);

export default PaymentTotalCost;
