import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import { AuthContext } from "../AuthProvider";
import { FirebaseContext } from "../firebase";
import { ipAndPort } from "../config";
const QuestionnaireOne = ({ navigation }) => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const auth = fbContext.auth;
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const [employees, setEmployees] = useState(null);
  //const ipAndPort = "10.44.22.29:5001";
  console.log(ipAndPort);
  console.log(auth);
  console.log("user", user);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        let response = await fetch(`http://${ipAndPort}/api/employee`);
        let data = await response.json();
        console.log(data);
        setEmployees(data);
      } catch (ex) {
        console.error(`Problems fetching:${ex.message}`);
      }
    };
    getEmployees();
  }, []);

  const onPressHandle = async (reason) => {
    console.log("the uid", user.uid);
    try {
      const response = await fetch(
        `http://${ipAndPort}/api/employee/byAuthId/${user.uid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reasonForTreatment: `${reason}`,
          }),
        }
      );
      const newEmployee = await response.json();
      console.log(newEmployee);
      navigation.navigate("Questionnaire Two");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={styles.quizContainer}>
      <View>
        <Text style={styles.quizTitle}>Why are you here today?</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            onPress={() => onPressHandle("Prevention")}
          >
            Prevention
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            onPress={() => onPressHandle("Exploring")}
          >
            Exploring
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            onPress={() => onPressHandle("Navigating a mental health network")}
          >
            Navigating the mental health network
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            onPress={() => onPressHandle("Managing a mental illness")}
          >
            Managing a mental illness
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: "white",
    position: "relative",
  },

  button: {
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    borderRadius: 20,
    backgroundColor: "#e1705d",
    paddingHorizontal: 20,
    marginVertical: 20,
    borderColor: "#e1705d",
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: "center",
  },
  quizTitle: {
    color: "#0f1a4d",
    fontSize: 26,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 10,
    padding: 18,
    fontWeight: "bold",
  },
});
export default QuestionnaireOne;
