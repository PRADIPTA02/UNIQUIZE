import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.circle}></View>
      <View style ={styles.imageContainer}>
        <Image source={require("../assets/logo.png")}  />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText} >Improve your skills with our games.</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  footer: {
    top: "27%",
  },
  footerText :{
    color:'#658194',
    fontSize:16,
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
      position: "absolute",
      height:150,
      width:150,
      borderRadius:150,
      top:260,
      left:69,
      backgroundColor:"#F0EFFF"
  },
});