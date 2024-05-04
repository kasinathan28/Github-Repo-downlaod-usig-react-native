import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Logo from "../assets/logo.png";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={"#7da0ca"} /> 
      <View style={styles.header}>

      </View>

      <View style={styles.mainCard}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#021024",
  },
  header:{
    padding:20,
    backgroundColor:"#7da0ca",
    height:height * 0.08,
  },
  mainCard:{
    backgroundColor:"#ddd",
    padding:20,
    height: height * 0.2,
    margin:20,
    borderRadius:20
  },
});
