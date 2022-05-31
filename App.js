import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import SplashScreen from "./Screens/SplashScreen";
import StartedScreen from "./Screens/StartedScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SplashScreen /> */}
      <StartedScreen />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
