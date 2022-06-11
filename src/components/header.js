import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
// import logo from "../../assets/img/D.png";
import { color } from "../theme/colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoView}>
        {/* <img src={logo} width="" alt="" /> */}
        <Image style={styles.logo} source={require("../../assets/img/D.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 30,
    marginVertical: 100,
    padding: 30,
  },
  logoView: {
    backgroundColor: color.lightParrot,
    width: 60,
    height: 60,
    padding: 17,
    borderRadius: 50,
  },
});
