import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { rotate } from "@shopify/react-native-skia";

const Arrow = require("../assets/ArrowAnimation.json");

export default function OnBoard2() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#021024"} barStyle="default" />
      <View style={styles.AnimationCtn}>
        <LottieView
          source={require("../assets/Onboard2.json")}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <View style={styles.onboardTextCtn}>
        <Text style={styles.onboardText}>Welcome to</Text>
        <Text style={styles.Title}>Gi RE DO</Text> 
        <Text style={styles.subTitle}>Copy the URL of the GitHub Repo {"\n"} and paste it in the URL field</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.ArrowCtn}>
          <Text style={styles.startText}>Let's Start</Text>
          <LottieView 
          source={Arrow}
          autoPlay
          loop
          style={styles.ArrowImage}
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
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 50,
  },
  AnimationCtn: {
    width: "80%",
    aspectRatio: 1,
    backgroundColor: "#7da0ca",
    borderRadius: 50,
    marginBottom: 30,
    elevation: 10,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  animation: {
    flex: 1,
    marginBottom: "auto",
  },
  onboardTextCtn: {
    alignItems: "center",
    marginBottom: 20,
  },
  onboardText: {
    color: "#fff",
    fontFamily: "Poppins-Thin",
    fontSize: 30,
  },
  Title: {
    color: "#fff",
    fontFamily: "LOGO",
    fontSize: 30,
    marginBottom: 10,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Poppins-Thin",
    fontSize: 16,
    textAlign: "center",
  },
  ArrowCtn: {
    flexDirection: "row",
    backgroundColor: "#7da0ca",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  startText: {
    color: "#fff",
    fontSize: 18,
    marginRight: 10,
  },
  ArrowImage: {
    width: 30,
    height: 30,
    transform: [{ rotate: '270deg' }]
  }
  
});
