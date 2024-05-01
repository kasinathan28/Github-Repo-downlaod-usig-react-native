import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid
} from "react-native";
import Logo from "../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import Github from "../assets/github.png";
import Google from "../assets/google.png";
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
    if(formData.password !== formData.confirmPassword) {
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
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSubmit}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
      </View>
      <View style={styles.signUpbtnContainer}>
        <TouchableOpacity style={styles.signupOpt}>
          <Image style={styles.signupBtn} source={Google} alt="Google" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupOpt}>
          <Image style={styles.signupBtn} source={Github} alt="Github" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021024",
    padding: 20,
  },
  first: {
    marginTop: 100,
    alignItems: "center",
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: "LOGO",
    fontSize: 37,
    marginTop: 10,
    color: "#c1e8ff",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Thin',
    color: "#7da0ca",
    textAlign: "center",
    fontWeight: "200",
  },
  welcome: {
    marginVertical: 40,
    marginBottom: 20,
  },
  welcomeText: {
    color: "#7da0ca",
    fontSize: 35,
    fontFamily: 'Poppins-Regular',
  },
  formContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 22,
    color: "#7da0ca",
    fontWeight: "200",
    fontFamily: "Poppins-Thin",
  },
  input: {
    backgroundColor: "#7da0ca",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "#fff",
  },
  signupButton: {
    backgroundColor: "#052659",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 20,
  },
  signupButtonText: {
    fontFamily: 'Poppins-Regular',
    color: "#fff",
    fontSize: 20,
  },
  signInCtn: {
    flex: 1,
    alignItems: "center",
  },
  signIn: {
    marginTop: 40,
    color: "#fff",
  },
  signInText: {
    fontSize: 18,
    color: "#7da0ca",
    fontWeight: "200",
    fontFamily: 'Poppins-Regular'
  },
  signInTextSub: {
    fontFamily:'Poppins-Regular',
    textDecorationLine: "underline",
  },
  
  signUpbtnContainer: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  signup: {
    alignSelf: "center",
    marginBottom: 24,
  },
  signupText: {
    color: "#7da0ca",
    fontWeight: "200",
    fontFamily: 'Poppins-Thin',
    fontSize: 18,
  },
  signupSub: {
    fontFamily: 'Poppins-Regular',
    textDecorationLine: "underline",

  },
  signupOpt: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
  },
  signupBtn: {
    width: 40,
    height: 40,
  },
});
