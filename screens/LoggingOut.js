import { getAuth, signOut } from "firebase/auth";
import { Button, Alert } from "react-native";

const auth = getAuth();

export default function LoggingOut({ navigation }) {
  let logout = () => {
    signOut(auth).then(() => {
      Alert.alert("Success", "logged out successfully!", [
        {
          text: "OK",
          onPress: () => navigation.popToTop("MB Pension and Benefits Group"),
        },
      ]);
    });
  };

  return <Button title="Logout" onPress={logout} color={"#01796f"} />;
}
