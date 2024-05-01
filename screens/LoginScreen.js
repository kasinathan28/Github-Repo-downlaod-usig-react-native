import React, {  useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Github from "../assets/github.png";
import Google from "../assets/google.png";
const Logo = require("../assets/logo.png");

export default function LoginScreen() {

  const navigate = useNavigation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const Login = () => {
    navigate.navigate("Index");
  };

  const handleSignup = () => {
    navigate.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
            placeholderColor="#333"
            onChangeText={(email) => setForm({ ...form, email })}
          />
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput
            secureTextEntry
            style={styles.inputControl}
            placeholder="********"
            placeholderColor="#333"
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "#021024"
  },
  header: {
    marginVertical: 106,
    marginBottom: 50
  },
  headerImg: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  title: {
    fontFamily:"LOGO",
    fontSize: 37,
    marginBottom: 0,
    marginVertical: 30,
    color: "#c1e8ff",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Thin',
    color: "#7da0ca",
    textAlign: "center",
    fontWeight: "200"
  },
  welcome: {
    marginBottom: 20,
    marginTop:10
  },
  welcomeText: {
    color: "#7da0ca",
    fontSize: 35,
    fontFamily: 'Poppins-Regular'
  },
  form: {
    marginBottom: 50
    
  },
  input: {
    gap: 10
  },
  inputLabel: {
    fontSize: 22,
    color: "#7da0ca",
    fontWeight: "200",
    fontFamily: 'Poppins-Thin'
  },
  inputControl: {
    backgroundColor: "#7da0ca",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12
  },
  formAction: {
    marginVertical: 40
  },
  btn: {
    backgroundColor: "#052659",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: "#fff"
  },
  signUpbtnContainer: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  signup: {
    alignSelf: "center",
    marginBottom: 24
  },
  signupText: {
    color: "#7da0ca",
    fontWeight: "200",
    fontFamily:'Poppins-Regular',
    fontSize: 18
  },
  signupSub: {
    fontFamily: 'Poppins-Regular',
    textDecorationLine: "underline"
  },
  signupOpt: {
    marginBottom: 40
  },
  signupBtn: {
    width: 40,
    height: 40
  }
});