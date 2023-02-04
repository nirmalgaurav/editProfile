import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import ImageFile from './Image';


export default function EditButton(props) {

 const handleChoosePhoto = () => {
  console.log('upload image button clicked')
 }

  return (
    <>  
        <ImageFile />
          <TouchableOpacity style = {styles.btn} onPress={ handleChoosePhoto }>
                  <Text style={styles.textStyle}>{props.name}</Text>
          </TouchableOpacity>
    </>
   
  )
}



const styles = StyleSheet.create({
    btn : {
        height : 50,
        width : "60%",
        borderRadius : 50,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#1e1e5b',
        marginVertical : 15,
       
    },
  textStyle : {
        fontSize : 18,
        color : 'white'
  }
})