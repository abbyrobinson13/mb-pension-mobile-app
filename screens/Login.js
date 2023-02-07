import {
  Text,
  View,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import { Button } from "react-native-paper";
import React from "react";
import InlineTextButton from "../components/InlineTextButton";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
  const background = require("../assets/background.jpg");

  if (auth.currentUser) {
    navigation.navigate("Employee Registration Form");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Logging Out");
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("Logging Out", {
            user: userCredential.user,
          });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage("User not found. Please, Create a Password");
        });
    } else {
      setErrorMessage("Please, enter an email and password");
    }
  };

  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}
      >
        <Text style={AppStyles.darkText}>Log in</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput
          style={AppStyles.textInput}
          placeholder="Email"
          placeholderTextColor="darkgreen"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={AppStyles.textInput}
          placeholder="Password"
          placeholderTextColor="darkgreen"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.darkText}>Don't have a password, yet?</Text>
          <InlineTextButton
            text=" Create password"
            onPress={() => navigation.navigate("Create Password")}
          />
        </View>
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.darkText}>Forgotten your password?</Text>
          <InlineTextButton
            text=" Reset"
            onPress={() => navigation.navigate("Reset Password")}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Button
              style={AppStyles.button}
              labelStyle={{ color: "black", fontSize: 16, fontWeight: "bold" }}
              onPress={login}
            >
              Log in
            </Button>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
