import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import React from "react";
import InlineTextButton from "../components/InlineTextButton";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser);
          navigation.navigate("Employee Registration Form", {
            user: userCredential.user,
          });
        })
        .catch((error) => {
          setValidationMessage("login error");
          console.log(error);
        });
    }
  };
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <Text style={AppStyles.lightText}>Sign Up</Text>
        <Text style={AppStyles.errorText}>{validationMessage}</Text>
        <TextInput
          style={AppStyles.textInput}
          placeholder="Email"
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={AppStyles.textInput}
          placeholder="Password"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) =>
            validateAndSet(value, confirmPassword, setPassword)
          }
        />
        <TextInput
          style={AppStyles.textInput}
          placeholder="Confirm Password"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(value) =>
            validateAndSet(value, password, setConfirmPassword)
          }
        />
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.lightText}>Already have an account?</Text>
          <InlineTextButton
            text=" Login"
            onPress={() => navigation.popToTop("Logout")}
          />
        </View>
        <Button title="Sign Up" onPress={signUp} color={"#01796f"} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
