import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FooterScreenIndicator from "../components/footerScreenIndicator";
import Button from "../components/Button";

const StartedScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffff"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={27} color="#1384D1" />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/started-logo.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Unlocking knowledge at the speed {"\n"}of thought.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <View style = {styles.buttonContainer}>
        <Button name="Get Started" style={styles.Button} />
        </View>
        <FooterScreenIndicator pageNum={1} />
      </View>
    </View>
  );
};

export default StartedScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    top: "-17%",
    height: 350,
    width: 350,
  },
  header: {
    position: "absolute",
    top: 5,
    left: 20,
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
  },
  text: {
    paddingTop: "30%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#95a5a6",
    textAlign: "center",
  },
  footerContainer: {
    position: "absolute",
    bottom: 10,
    alignItems: "center",
    
  },
  buttonContainer: {
    paddingBottom: 60,
  },
});
