import { View, StyleSheet ,Text ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";


export default function ImageFile(props) {


  const handleChoosePhoto = () => {
    console.log('upload image btn pressed')    
  }

  return <View style={styles.container}>
      <Icon name="edit" size={30} style={{color : 'white'}} />
      <Image style={styles.imageStyle} source={require("../assets/defaultImage.jpg")} />
      <TouchableOpacity style={styles.btn} onPress={handleChoosePhoto}>
        <Text style={styles.textStyle}>Upload Image</Text>
      </TouchableOpacity>
    </View>;
 
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  },
  imageStyle: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2
  },
  btn: {
    height: "55",
    width: "70%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 15,
    marginHorizontal : 'auto',
  },
  textStyle: {
    fontSize: 15,
    color: "black",
    fontStyle : 'bold',
    marginVertical : "10",
  }
});
