import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Dimensions,
  StatusBar,
} from "react-native";
import Logo from "../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import Github from "../assets/github.png";
import Google from "../assets/google.png";

const { width, height } = Dimensions.get("window");

export default function SignUpScreen() {
  const navigate = useNavigation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match");
      return;
    }
    navigate.navigate("Login");
    showToast("Signup successful!");
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#021024"} barStyle="default" />
      <View style={styles.first}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>GI RE DO</Text>
        <Text style={styles.subtitle}>{"{ Github Repo Downloader }"}</Text>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>🔗 Join Now Dev</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#333"
          onChangeText={(text) => handleChange("email", text)}
          value={formData.email}
        />
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#333"
          onChangeText={(text) => handleChange("password", text)}
          value={formData.password}
          secureTextEntry
        />
        <Text style={styles.inputLabel}>Re-Enter Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#333"
          onChangeText={(text) => handleChange("confirmPassword", text)}
          value={formData.confirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Icons */}
      <View style={styles.signInCtn}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigate.navigate("Login")}
        >
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text style={styles.signInTextSub}>Login</Text>
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
    flex: 1,
    backgroundColor: "#021024",
    padding: width * 0.05,
  },
  first: {
    // marginTop: height * 0.04,
    alignItems: "center",
    marginVertical:height * 0.02
  },
  logo: {
    marginBottom: height * 0.02,
    width: width * 0.2,
    height: width * 0.2,
  },
  title: {
    fontFamily: "LOGO",
    fontSize: width * 0.1,
    marginTop: height * 0.01,
    color: "#c1e8ff",
  },
  subtitle: {
    fontSize: width * 0.04,
    fontFamily: "Poppins-Regular",
    color: "#7da0ca",
    textAlign: "center",
    fontWeight: "200",
  },
  welcome: {
    marginVertical: height * 0.02,
    marginBottom: height * 0.01,
  },
  welcomeText: {
    color: "#7da0ca",
    fontSize: width * 0.07,
    fontFamily: "Poppins-Regular",
  },
  formContainer: {
    height:"auto"
  },
  inputLabel: {
    fontSize: width * 0.04,
    color: "#7da0ca",
    fontFamily: "Poppins-Thin",
  },
  input: {
    backgroundColor: "#7da0ca",
    borderRadius: width * 0.02,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    color: "#fff",
    marginBottom: height * 0.02,
  },
  signupButton: {
    backgroundColor: "#052659",
    borderRadius: width * 0.02,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: height * 0.01,
    marginTop: height * 0.01,
  },
  signupButtonText: {
    fontFamily: "Poppins-Regular",
    color: "#fff",
    fontSize: width * 0.05,
  },
  signInCtn: {
    alignItems: "center",
    justifyContent:"center",
    gap: height * 0.01,
    marginTop:height * 0.1
  },
  signIn: {
    color: "#fff",
  },
  signInText: {
    fontSize: width * 0.04,
    color: "#7da0ca",
    fontFamily: "Poppins-Thin",
  },
  signInTextSub: {
    fontFamily: "Poppins-Regular",
    textDecorationLine: "underline",
  },
  signUpbtnContainer: {
    flexDirection: "row",
    gap: width * 0.05,
  },
  signupOpt: {
    flexDirection: "row",
  },
  signupBtn: {
    width: width * 0.1,
    height: width * 0.1,
  },
});
