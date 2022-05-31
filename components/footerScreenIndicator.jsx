import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const footerScreenIndicator = (props) => {
  return (

    <View style= {styles.circleContainer}>
      <FontAwesome name= {props.pageNum === 1 ? 'circle':'circle-o'} size={13} color="#1384D1" />
      <FontAwesome name= {props.pageNum === 2 ? 'circle':'circle-o'} size={13} color="#1384D1" />
      <FontAwesome name= {props.pageNum === 3 ? 'circle':'circle-o'} size={13} color="#1384D1" />

    </View>

  )
}

export default footerScreenIndicator

const styles = StyleSheet.create({
  circleContainer:{
    flexDirection: 'row',
    width:45,
    justifyContent: 'space-between',
  }
})