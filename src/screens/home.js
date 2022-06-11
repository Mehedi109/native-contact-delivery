import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import Header from "../components/header";
import { color } from "../theme/colors";
import vector from "../../assets/img/Vector.png";
import Text from "../components/text/text";
import { spacing } from "../theme/spacing";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.homeContent}>
          <View style={styles.vectorImg}>
            <Image source={require("../../assets/img/Vector.png")} />
          </View>
          <Text preset="h1" style={styles.title}>
            Non-Contact Deliveries
          </Text>
          <Text preset="p" style={styles.description}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Order");
            }}
            style={styles.orderBtn}
          >
            <Text style={styles.orderText}>ORDER NOW</Text>
          </Pressable>
          <Text preset="p">DISMISS</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: color.lightPurple,
    textAlign: "center",
  },
  homeContent: {
    alignItems: "center",
    backgroundColor: color.lightGray,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: spacing[10],
  },
  vectorImg: {
    marginTop: 60,
    width: 120,
    height: 120,
    backgroundColor: color.white,
    padding: 40,
    borderRadius: 100,
  },
  title: {
    padding: spacing[5],
    marginTop: spacing[4],
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    padding: 10,
    lineHeight: 25,
  },
  orderBtn: {
    width: 340,
    backgroundColor: "#0BCE83",
    padding: spacing[4],
    borderRadius: spacing[2],
    marginTop: spacing[10],
    marginBottom: spacing[10],
  },
  orderText: {
    color: color.white,
    textAlign: "center",
  },
});
