import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function SearchScreen() {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={{alignItems:'center'}}>
      <View style={style.topContainer}>
        <Text style={{fontSize: 26, color:Colors.WHITE, textAlign: 'center'}}
        > Search by
            <Text style={{fontWeight: 'bold'}}> Recipes </Text>
        </Text>
        <TextInput
          editable
          // multiline
          // numberOfLines={4}
          // maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          // style={{padding: 10, backgroundColor: Colors.WHITE}}
          placeholder="Search"

          style={style.textInput}
        /> 
        
      </View>
      <Text style={{
        fontSize:25, 
        fontWeight:'bold', 
        marginLeft: -200,
        marginTop: 15,
        }}>Suggestions</Text>
          
    </View>
  )
}

const style = StyleSheet.create({
    topContainer: {
        width:'100%',
        height: '70%',
        backgroundColor: Colors.PINK,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        // marginTop: -20,
        padding:20,
      
    },
    textInput: {
      backgroundColor:Colors.WHITE,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      // borderBlockColor:
    }
})