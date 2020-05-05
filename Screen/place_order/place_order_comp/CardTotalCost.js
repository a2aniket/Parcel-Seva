import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = () => (
  <Card style={{ backgroundColor: "#ABEBC6" }}>
    <Card.Content>
      <Paragraph>Total Item</Paragraph>
      <Paragraph>Total Cost</Paragraph>
    </Card.Content>
  </Card>
);

export default MyComponent;
