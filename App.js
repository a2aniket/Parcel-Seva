import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import CreateOTP from "./Screen/installation/installation_screen/CreateOTP";
import VerifyOTP from "./Screen/installation/installation_screen/VerifyOTP";
import AppHome from "./Screen/app_home/app_home_screen/AppHome";
import Restaurant from "./Screen/resraurant/restaurant_screen/Restaurant";
import RestaurantHome from "./Screen/restaurant_home/restaurant_home_screen/RestaurantHome";
import Card from "./Screen/place_order/place_order_screen/cart";
import Payment from "./Screen/place_order/place_order_screen/Payment";
import Addres from "./Screen/place_order/place_order_screen/Addres";
import OrderTracking from "./Screen/order_tracking/order_tracking_screen/OrderTracking";
import Grocery from "./Screen/grocery/Grocery";
import SendPackage from "./Screen/send_package/send_package_screen/SendPackage";
import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TabBar } from "react-native-tab-view";

class Orders extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>In DevlopMent!</Text>
      </View>
    );
  }
}

class Profiles extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>In DevlopMent!!</Text>
      </View>
    );
  }
}

class Favorites extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>In DevlopMent!!</Text>
      </View>
    );
  }
}

const HomeTap = createBottomTabNavigator(
  {
    HomeApp: {
      screen: AppHome,
    },
    Order: Orders,
    Favorite: Favorites,
    Profile: Profiles,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let myicon;
          if (routeName == "HomeApp") {
            myicon = "md-home";
          } else if (routeName == "Order") {
            myicon = "md-list-box";
          } else if (routeName == "Profile") {
            myicon = "md-person";
          } else if (routeName == "Favorite") {
            myicon = "md-heart";
          }
          return <Ionicons name={myicon} size={30} color={tintColor} />;
        },
      };
    },
  }
);

const mytabs = createMaterialTopTabNavigator(
  {
    card: {
      screen: Card,
    },
    Addres: {
      screen: Addres,
    },
    Payment: {
      screen: Payment,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "green",
        paddingTop: 50,
      },
    },
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: CreateOTP,
    },

    VerifyOTP: {
      screen: VerifyOTP,
    },

    AppHome: {
      screen: HomeTap,
    },

    SendPackage: {
      screen: SendPackage,
    },
    Restaurant: {
      screen: Restaurant,
    },

    Grocery: {
      screen: Grocery,
    },
    RestaurantHome: {
      screen: RestaurantHome,
    },

    Card: {
      screen: mytabs,
    },
    OrderTracking: {
      screen: OrderTracking,
    },
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);
