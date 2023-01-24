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

const QuestionnaireTwo = ({ navigation }) => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const auth = fbContext.auth;
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const [employees, setEmployees] = useState(null);
  const ipAndPort = "10.44.22.75:5001";
  console.log(ipAndPort);
  console.log(auth);
  console.log("user", user);

  //to do update to real auth
  const mockUID = " ";

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
    const response = await fetch(
      `http://${ipAndPort}/api/employee/byEmail/${user.email}`,
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
  };

  return (
    <View style={styles.quizContainer}>
      <View>
        <Text style={styles.quizTitle}>Tell us about your areas of concern:</Text>
        <Text style={styles.quizTitle}>Click below for more information</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "black", fontSize: 16, fontWeight: "bold" }}
            onPress={() => onPressHandle("Prevention")}
          >
            Prevention
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "black", fontSize: 16, fontWeight: "bold" }}
            onPress={() => onPressHandle("Exploring")}
          >
            Exploring
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "black", fontSize: 16, fontWeight: "bold" }}
            onPress={() => onPressHandle("Navigating a mental health network")}
          >
            Navigating the mental health network
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            style={styles.button}
            labelStyle={{ color: "black", fontSize: 16, fontWeight: "bold" }}
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
    backgroundColor: "#9AC6DF",
    position: "relative",
  },

  button: {
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginVertical: 20,
    borderColor: "white",
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: "center",
  },
  quizTitle: {
    color: "black",
    fontSize: 28,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 10,
    padding: 18,
    fontWeight: "bold",
  },
});
export default QuestionnaireTwo;
