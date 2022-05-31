import { View, Text, TouchableOpacity ,StyleSheet} from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground } from "react-native-web";

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity style = {styles.buttonContainer}>
        <Text style = {styles.buttonText}>{props.name}</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: 54,
        width:292,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1384D1',
        
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        top:3
    }
})
