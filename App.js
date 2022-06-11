import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import Home from "./src/screens/home";
import { color } from "./src/theme/colors";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Order from "./src/screens/order";

export default function App() {
  const [loaded] = useFonts({
    "SF-Pro-Display-Black": require("./assets/fonts/SF-Pro-Display-Black.otf"),
    "SF-Pro-Text-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    // SFPRODISPLAYREGULAR: require("./assets/fonts/SFPRODISPLAYREGULAR.otf"),
  });
  if (!loaded) {
    return <Text>loading...</Text>;
  }

  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* <Text>ok go</Text>
      <Text>ok go</Text>
      <Text>ok go</Text>
      <Text>ok go</Text>
      <Text>ok go</Text>
      <Text>ok go</Text>
      <Text>ok go</Text>
      <Text>ok go</Text>
      <Text>ok go</Text> */}
      <NavigationContainer>
        {/* <Home /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
