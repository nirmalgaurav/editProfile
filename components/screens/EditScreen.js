import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import ImageFile from "./../Image";
import MidBody from "./../midBody";

export default function EditScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageFile />
      <MidBody />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#47477c"
  }
});
