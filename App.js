import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import SplashScreen from "./Screens/SplashScreen";
import StartedScreen from "./Screens/StartedScreen";
import SignIn from './Screens/SignIn'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SplashScreen /> */}
      {/* <StartedScreen /> */}
      <SignIn />
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
