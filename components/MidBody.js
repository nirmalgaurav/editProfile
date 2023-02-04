import { Button, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native-web';

export default function MidBody() {
    const[text, setText] = useState('');
    const[userName , setUserName] = useState('');
  return (
    <>
      <View style={{flexDirection : 'row'}}>
      <Icon name="user" size={30} style={{color : 'white' , marginTop :20 , marginRight :10}} />
      <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder=" Name"
              placeholderTextColor={'white'}
          />
    

      </View>
          
          
      <View style={{flexDirection : 'row'}}>
        <Icon name="user" size={30} style={{color : 'white' , marginTop :20 , marginRight :10}} />
        <TextInput
              style={styles.input}
              onChangeText={setUserName}
              value={userName}
              placeholder=" Username"
              placeholderTextColor={'white'}
            />
      </View>

      <View style={{borderWidth : 1 , borderColor : 'white' , borderRadius : 10 , width : '90%'}}>
          <View style= {{flexDirection : 'row', justifyContent : 'space-between'}}>
            <Text style={{color : 'white', marginTop : 15 , fontSize : 18 , marginLeft : 10 , marginBottom : 10}}>Your Interests</Text>
            <Icon name="edit" size={30} style={{color : 'white' , marginTop :10 , marginRight :10}} />
          </View>
        
      </View>


      <View style={{borderWidth : 1 , borderColor : 'white' , borderRadius : 10 , width : '90%' , height : '100%' , backgroundColor : 'white'}}>

      </View>
      
      
    </>
  )
}

const styles = StyleSheet.create({
    input: {
        width : "auto",
        height: 50,
        margin: 12,
        borderRadius : 10,
        color : 'white',
        fontSize : 18,
  },
  
})