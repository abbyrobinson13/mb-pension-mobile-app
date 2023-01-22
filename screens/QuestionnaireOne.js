import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import { auth } from "../firebase";

const QuestionaireOne = ({ navigation }) => {
  const [employees, setEmployees] = useState(null);
  const ipAndPort = "10.0.0.139:5001";
  console.log(ipAndPort);
  console.log(auth);

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
      `http://${ipAndPort}/api/employee/${auth.currentUser.uid}`,
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
        <Text style={styles.quizTitle}>Why are you here today?</Text>
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
            onPress={() => onPressHandle("Prevention")}
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
            onPress={() => onPressHandle("Prevention")}
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
export default QuestionaireOne;
