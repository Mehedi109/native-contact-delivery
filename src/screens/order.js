import {
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import orderImg from "../../assets/img/Media.png";
import Text from "../components/text/text";
import { color } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Order() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.orderView}>
          <Image
            style={styles.orderImg}
            source={require("../../assets/img/Media.png")}
          />
          <View style={styles.orderContent}>
            <Text preset="h2" style={styles.boston}>
              Boston Lettuce
            </Text>
            <View style={styles.pieceView}>
              <Text preset="h1" style={styles.pieceNumber}>
                1.10
              </Text>
              <Text preset="p" style={styles.pieceText}>
                € / piece
              </Text>
            </View>
            <Text style={styles.pieceGram}> ~ 150 gr / piece</Text>
            <Text preset="h4" style={styles.spain}>
              Spain
            </Text>
            <Text preset="p">
              Lettuce is an annual plant of the daisy family, Asteraceae. It is
              most often grown as a leaf vegetable, but sometimes for its stem
              and seeds. Lettuce is most often used for salads, although it is
              also seen in other kinds of food, such as soups, sandwiches and
              wraps; it can also be grilled.
            </Text>
            <View style={styles.cartView}>
              <View style={styles.heartView}>
                <AntDesign name="hearto" size={20} color="black" />
              </View>
              <View style={styles.cartBtn}>
                <View>
                  <Feather name="shopping-cart" size={20} color="white" />
                </View>
                <Text style={{ marginLeft: 20 }}>ADD TO CART</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  orderView: {
    position: "relative",
    height: 1000,
    alignSelf: "stretch",
  },
  orderImg: {
    // width: 414,
    height: 358,
  },
  orderContent: {
    backgroundColor: color.lightGray,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    top: 281,
    color: "black",
    height: 1000,
  },
  boston: {
    // fontWeight: "700",
  },
  pieceView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  pieceNumber: {
    // fontWeight: "700",
  },
  pieceText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  pieceGram: {
    fontSize: 20,
    color: "#06BE77",
  },
  spain: {
    fontWeight: "bold",
    marginVertical: spacing[9],
  },
  cartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 70,
    marginBottom: 30,
  },
  heartView: {
    backgroundColor: color.white,
    borderColor: color.black,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderRadius: spacing[2],
    height: 53,
  },
  cartBtn: {
    flexDirection: "row",
    color: "white",
    backgroundColor: "#0BCE83",
    paddingHorizontal: 60,
    paddingVertical: spacing[4],
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: spacing[2],
    height: 53,
  },
});
