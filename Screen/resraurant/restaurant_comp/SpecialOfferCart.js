import React from "react";
import { Card, Text, Title } from "react-native-paper";
import { Image, View, ScrollView, StyleSheet } from "react-native";

const SpecialOffer = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card style={styles.Card}>
          <View style={styles.hotelImage}>
            <Image
              source={require("../restaurant_images/rest.jpg")}
              style={styles.Image}
            />
          </View>
          <View>
            <Text style={styles.hotelName}>Torna</Text>
            <Text style={styles.textLocation}>FC rood</Text>
          </View>
          <View style={styles.savetitle}>
            <Image
              source={require("../restaurant_images/mony.png")}
              style={styles.saveImage}
            />
            <Text style={styles.saveText}>Save 50%</Text>
            <View style={styles.hoteType}>
              <Image
                source={require("../restaurant_images/heart.png")}
                style={styles.hotelTypeImage}
              />
            </View>
          </View>
        </Card>

        <Card style={styles.Card}>
          <View style={styles.hotelImage}>
            <Image
              source={require("../restaurant_images/rest.jpg")}
              style={styles.Image}
            />
          </View>
          <View>
            <Text style={styles.hotelName}>Torna</Text>
            <Text style={styles.textLocation}>FC rood</Text>
          </View>
          <View style={styles.savetitle}>
            <Image
              source={require("../restaurant_images/mony.png")}
              style={styles.saveImage}
            />
            <Text style={styles.saveText}>Save 50%</Text>
            <View style={styles.hoteType}>
              <Image
                source={require("../restaurant_images/heart.png")}
                style={styles.hotelTypeImage}
              />
            </View>
          </View>
        </Card>

        <Card style={styles.Card}>
          <View style={styles.hotelImage}>
            <Image
              source={require("../restaurant_images/rest.jpg")}
              style={styles.Image}
            />
          </View>
          <View>
            <Text style={styles.hotelName}>Torna</Text>
            <Text style={styles.textLocation}>FC rood</Text>
          </View>
          <View style={styles.savetitle}>
            <Image
              source={require("../restaurant_images/mony.png")}
              style={styles.saveImage}
            />
            <Text style={styles.saveText}>Save 50%</Text>
            <View style={styles.hoteType}>
              <Image
                source={require("../restaurant_images/heart.png")}
                style={styles.hotelTypeImage}
              />
            </View>
          </View>
        </Card>

        <Card style={styles.Card}>
          <View style={styles.hotelImage}>
            <Image
              source={require("../restaurant_images/rest.jpg")}
              style={styles.Image}
            />
          </View>
          <View>
            <Text style={styles.hotelName}>Torna</Text>
            <Text style={styles.textLocation}>FC rood</Text>
          </View>
          <View style={styles.savetitle}>
            <Image
              source={require("../restaurant_images/mony.png")}
              style={styles.saveImage}
            />
            <Text style={styles.saveText}>Save 50%</Text>
            <View style={styles.hoteType}>
              <Image
                source={require("../restaurant_images/heart.png")}
                style={styles.hotelTypeImage}
              />
            </View>
          </View>
        </Card>

        <Card style={styles.Card}>
          <View style={styles.hotelImage}>
            <Image
              source={require("../restaurant_images/rest.jpg")}
              style={styles.Image}
            />
          </View>
          <View>
            <Text style={styles.hotelName}>Torna</Text>
            <Text style={styles.textLocation}>FC rood</Text>
          </View>
          <View style={styles.savetitle}>
            <Image
              source={require("../restaurant_images/mony.png")}
              style={styles.saveImage}
            />
            <Text style={styles.saveText}>Save 50%</Text>
            <View style={styles.hoteType}>
              <Image
                source={require("../restaurant_images/heart.png")}
                style={styles.hotelTypeImage}
              />
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};
export default SpecialOffer;

const styles = StyleSheet.create({
  savetitle: {
    flexDirection: "row",
    padding: 3,
  },

  hotelImage: {
    alignItems: "center",
  },
  Image: {
    alignItems: "center",
    height: 80,
    width: 120,
  },

  saveImage: {
    height: 15,
    width: 15,
  },

  Card: {
    margin: 6,
    padding: 10,
    height: 150,
    width: 140,
  },
  hotelTypeImage: {
    height: 18,
    width: 18,
    marginLeft: 30,
  },

  hoteType: {},

  saveText: {
    color: "blue",
    alignItems: "center",
    fontSize: 12,
    padding: 3,
  },

  textLocation: {
    fontSize: 10,
  },

  hotelName: {
    fontWeight: "bold",
  },
});
