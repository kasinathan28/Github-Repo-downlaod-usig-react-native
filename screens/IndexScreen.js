import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";
import Logo from "../assets/logo.png";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const User = "Kasinathan";

export default function Index() {
  const handleSearchPress = () => {
    console.log("Searching...!");
  };

    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={"#7da0ca"} />
        <View style={styles.header}>
          <View style={styles.left}>
            <Image style={styles.logo} source={Logo} alt="Logo" />
          </View>
          <View style={styles.right}>
            <Pressable onPress={handleSearchPress}>
              <Icon style={styles.Icon} name="search" size={30} color="#fff" />
            </Pressable>
          </View>
        </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>Hi {User},</Text>
            <Text style={styles.subTitle}>Manage all your repo files here</Text>
          </View>
          <View style={styles.mainCard}></View>
      </View>
    );
  }

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#021024",
  },
  header: {
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#7da0ca",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  left: {
    padding: 10,
    backgroundColor: "#5483b3",
    borderRadius: 50,
    ...Platform.select({
      ios: {
        shadowColor: "#021024",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  logo: {
    width: width * 0.1,
    height: width * 0.1,
  },
  right: {
    backgroundColor: "#5483b3",
    padding: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#021024",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  Icon: {
    color: "#fff",
  },
  scrollViewContainer: {
    flex: 1,
  },
  
  title: {
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.05,
  },
  titleText: {
    color: "#fff",
    fontSize: width * 0.07,
  },
  subTitle:{
    color:"#7da0ca",
    fontSize:width * 0.04
  },

  mainCard: {
    backgroundColor: "#ddd",
    padding: 20,
    height: height * 0.2,
    borderRadius: 20,
    marginHorizontal: width * 0.05,
  },
});
