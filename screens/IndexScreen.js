import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/logo.png";
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.headerImg}>
          <Image style={styles.headerImg} source={Logo} />
        </View>
        <Text style={styles.headerText}>GI RE DO</Text>
        <Icon name="more-vert" size={28} color="#021024" style={styles.dot} /> 
      </View>
      
      <View style={styles.bottomNav}>
      <Icon name="person" size={38} color="#021024" /> 
      <Icon name="home" size={38} color="#021024" /> 
      <Icon name="help" size={38} color="#021024"  /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#021024",
  },
  header: {
    flexDirection: "row",
    marginBottom: "auto",
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#7da0ca",
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    gap: 20,
  },
  headerImg: {
    width: 60,
    height: 60,
  },
  headerText: {
    color: "#021024",
    fontSize: 24,
    fontFamily: "LOGO",
  },
  dot:{
    marginLeft:"auto"
  },
  bottomNav:{
    margin:20,
    marginTop:"auto",
    paddingHorizontal:40,
    paddingVertical:20,
    alignContent:"center",
    marginBottom:40,
    backgroundColor:"#7da0ca",
    flexDirection:"row",
    borderRadius:20,
    justifyContent:"space-between"
  },
});
