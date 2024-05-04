import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";


const { width, height } = Dimensions.get("window");

export default function OnBoard1() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={"#021024"} barStyle="default"/>
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../assets/OnboardImage1.json")}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.onboardText}>Welcome to</Text>
        <Text style={styles.title}>Gi RE DO</Text>
        <Text style={styles.subTitle}>{"{ Github Repo Downloader }"}</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.arrowContainer}>
        <LottieView 
          source={require("../assets/ArrowAnimation.json")}
          autoPlay
          loop
          style={styles.arrowImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021024",
    alignItems: "center",
    justifyContent:"space-between",
    paddingVertical:height *0.1

  },
  animationContainer: {
    backgroundColor:"#7da0ca",
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 20,
    overflow: "hidden",    
  },
  animation: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  onboardText: {
    color: "#fff",
    fontFamily: "Poppins-Thin",
    fontSize: width * 0.04,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontFamily: "LOGO",
    fontSize: width * 0.1,
    marginBottom: 10,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Poppins-Thin",
    fontSize: width * 0.04,
  },
  arrowContainer: {
    backgroundColor: "#7da0ca",
    borderRadius: 50,
    padding: 10,
  },
  arrowImage: {
    width: width * 0.1,
    height: height *0.09,
  },
});
