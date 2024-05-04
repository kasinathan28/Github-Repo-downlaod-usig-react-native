import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import Github from "../assets/github.png";
import Google from "../assets/google.png";
const Logo = require("../assets/logo.png");

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const navigate = useNavigation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const Login = () => {
    navigate.navigate("OnBoard2");
  };

  const handleSignup = () => {
    navigate.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor={"#021024"} barStyle="default" />
        <Image style={styles.headerImg} source={Logo} alt="Logo" />
        <Text style={styles.title}>GI RE DO</Text>
        <Text style={styles.subtitle}>{"{ Github Repo Downloader }"}</Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>👋🏻 Welcome Back Dev </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.inputControl}
            value={form.email}
            placeholder="example@gmail.com"
            placeholderTextColor="#333"
            onChangeText={(email) => setForm({ ...form, email })}
          />
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput
            secureTextEntry
            style={styles.inputControl}
            placeholder="********"
            placeholderTextColor="#333"
            value={form.password}
            onChangeText={(password) => setForm({ ...form, password })}
          />
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity onPress={Login}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SingupContainer}>
        <TouchableOpacity style={styles.signup} onPress={handleSignup}>
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupSub}>Signup</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.signUpbtnContainer}>
          <TouchableOpacity style={styles.signupOpt}>
            <Image style={styles.signupBtn} source={Google} alt="Google" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupOpt}>
            <Image style={styles.signupBtn} source={Github} alt="Github" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#021024",
    alignItems: "center",
    height: height ,
    paddingVertical: width * 0.09,
  },
  header: {
    alignItems: "center",
    marginVertical:height * 0.05,
  },
  headerImg: {
    marginBottom: height * 0.02,
    width: width * 0.2,
    height: width * 0.2,
  },
  title: {
    fontFamily: "LOGO",
    fontSize: width * 0.1,
    color: "#c1e8ff",
  },
  subtitle: {
    fontSize: width * 0.04,
    color: "#7da0ca",
    fontWeight: "200",
  },
  welcome: {
    marginRight: "auto",
    marginHorizontal: width * 0.04,
  },
  welcomeText: {
    color: "#7da0ca",
    fontSize: width * 0.07,
  },
  form: {
    marginVertical:height *0.03,
    width: width * 0.9,
    height:"auto",
  },
  inputLabel: {
    fontSize: width * 0.04,
    color: "#7da0ca",
    fontWeight: "200",
    marginVertical: width * 0.02,
  },
  inputControl: {
    backgroundColor: "#7da0ca",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.02,
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
  },
  formAction: {
    marginVertical: height * 0.02,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#052659",
    borderRadius: width * 0.01,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    alignItems: "center",
    width: width * 0.9,
  },
  btnText: {
    fontSize: width * 0.05,
    fontFamily: "Poppins-Regular",
    color: "#fff",
  },

  SingupContainer: {
    alignItems: "center",
    flexDirection: "column",
    marginBottom: height * 0.05,
    marginTop:"auto"
  },

  signupText: {
    fontSize: width * 0.04,
    color: "#7da0ca",
    fontFamily: "Poppins-Regular",
    marginVertical: height * 0.02,
  },
  signupSub: {
    textDecorationLine: "underline",
  },
  signUpbtnContainer: {
    width: width *1,
    flexDirection: "row",
    gap: width * 0.04,
    justifyContent:"center"
  },
  signupOpt: {
    flexDirection: "row",
  },
  signupBtn: {
    width: width * 0.09,
    height: width * 0.09,
  },
});
