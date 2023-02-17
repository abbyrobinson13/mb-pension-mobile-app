import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { FirebaseContext } from "../firebase";
import { AuthContext } from "../AuthProvider";
// import { format } from "date-fns";
import { ipAndPort } from "../config";

const EmployeeRegistrationForm = ({ navigation }) => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const auth = fbContext.auth;
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(null);

  const onHandleChange = (name, e) => {
    setEmployees({ ...employees, [name]: e });
  };

  useEffect(() => {
    const getEmployees = async () => {
      try {
        setLoading(true);
        let response = await fetch(
          `http://${ipAndPort}/api/employee/byEmail/${user.email}`
        );
        let data = await response.json();
        setLoading(false);

        if (
          data.department != null ||
          data.position != null ||
          data.employmentDate != null ||
          data.dependents != null ||
          data.mobile != null ||
          data.street != null ||
          data.postalCode != null ||
          data.city != null ||
          data.province != null
        ) {
          navigation.navigate("ContentHome");
        } else {
          setEmployees(data);
        }
      } catch (ex) {
        console.error(`Problems fetching:${ex.message}`);
      }
    };

    getEmployees();
  }, []);

  const handleSubmit = async () => {
    let response = await fetch(
      `http://${ipAndPort}/api/employee/byEmail/${user.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employees),
      }
    );
    console.log(response.status);

    if (response.ok) {
      let data = await response.json();

      Alert.alert("Success", " Submitted successfully", [
        { text: "OK", onPress: () => navigation.navigate("Questionnaire One") },
      ]);
      console.log(data);
    } else {
      Alert.alert("Error", " Not submitted", [{ text: "OK" }]);
    }
  };

  if (loading) {
    return <Text>Loading....</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {employees && (
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              label="Department"
              name="department"
              onChangeText={(e) => onHandleChange("department", e)}
              value={employees.department}
            />
            <TextInput
              style={styles.textInput}
              label="Position"
              name="position"
              onChangeText={(e) => onHandleChange("position", e)}
              value={employees.position}
            />
            <TextInput
              style={styles.textInput}
              label="Employment Date"
              name="employmentDate"
              onChangeText={(e) => onHandleChange("employmentDate", e)}
              value={employees.employmentDate}
            />
            <TextInput
              style={styles.textInput}
              label="Dependents"
              name="dependents"
              onChangeText={(e) => onHandleChange("dependents", e)}
              value={employees.dependents}
            />
            <TextInput
              style={styles.textInput}
              label="Mobile"
              name="mobile"
              onChangeText={(e) => onHandleChange("mobile", e)}
              value={employees.mobile}
            />
            <TextInput
              style={styles.textInput}
              label="Street"
              name="street"
              onChangeText={(e) => onHandleChange("street", e)}
              value={employees.street}
            />
            <TextInput
              style={styles.textInput}
              label="Postal Code"
              name="postalCode"
              onChangeText={(e) => onHandleChange("postalCode", e)}
              value={employees.postalCode}
            />
            <TextInput
              style={styles.textInput}
              label="City"
              name="city"
              onChangeText={(e) => onHandleChange("city", e)}
              value={employees.city}
            />
            <TextInput
              style={styles.textInput}
              label="Province"
              name="province"
              onChangeText={(e) => onHandleChange("province", e)}
              value={employees.province}
            />

            <Button
              style={styles.button}
              title="Register"
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={styles.text}>Submit</Text>
            </Button>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#9AC6DF",
    position: "relative",

    padding: 20,
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
  textInput: {
    borderWidth: 0,
    borderColor: "white",
    height: 0,
    borderRadius: 8,
    backgroundColor: "white",
    paddingHorizontal: 6,
    marginVertical: 2,
    borderColor: "white",
    elevation: 20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 0,
    borderWidth: 0,
    borderRadius: 5,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#9AC6DF",
  },
});
export default EmployeeRegistrationForm;
