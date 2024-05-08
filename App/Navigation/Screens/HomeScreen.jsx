import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'

export default function HomeScreen() {
  return (
    <View style={{alignItems:'center'}}>
      <Text>This is the HomeScreen</Text>
      <View style={style.topContainer}>
        <Text>Hi There!</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    topContainer: {
        width:'100%',
        height: '60%',
        backgroundColor: Colors.PINK,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30

    }
})