import {
  View,
  Text,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import AppStyles from "../styles/AppStyles";

export default function EmployeeRegistrationForm({ navigation }) {
  const background = require("../assets/background.jpg");

  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}
      >
        <Text style={AppStyles.lightText}>
          Afshin, you need to add the REGISTRATION FORM HERE
        </Text>
        <Button title="Submit" color={"#01796f"} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
