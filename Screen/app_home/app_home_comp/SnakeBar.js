import React, { useState, state } from "react";
import { View, Text, Button, Image } from "react-native";
import { Snackbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default () => {
  const [visible, setVisible] = useState(true);
  const [temprature, setTemparature] = useState("fetching..");
  const [weather, setWeather] = useState("fetching..");
  let city = "channi";
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=1a4cc933f83a34b78b852e75b80af2ad`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setTemparature(data.main.temp);
      setWeather(data.weather[0].main);
    });
  let ioc = "md-cloud";
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <Snackbar
        style={{ backgroundColor: "#161515" }}
        visible={visible}
        onDismiss={() => setTemparature(false)}
        action={{
          label: "HIDE",
          color: "red",
          onPress: () => setVisible(false),
        }}
      >
        <Ionicons
          name={ioc}
          size={22}
          color="white"
          style={{
            marginLeft: 10,
          }}
        />
        <Text>{"   "}</Text>
        <Text
          style={{
            fontSize: 15,
            padding: 15,
          }}
        >
          {weather}
          {"     "}
          <Ionicons
            name="md-thermometer"
            size={22}
            color="white"
            style={{
              marginLeft: 10,
            }}
          />

          <Text>
            {"    "}
            {temprature} {"  "}
            {"      "}
          </Text>
        </Text>
        <Text style={{ color: "green", fontWeight: "bold" }}>
          (No extra Charge)
        </Text>
      </Snackbar>
    </View>
  );
};
