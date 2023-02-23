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
    <ScrollView style={styles.Container}>
      <View color={"green"}>
        {employees && (
          <View>
            <TextInput
              style={styles.TextInput}
              textColor="#0F1A4D"
              label="Department"
              name="department"
              onChangeText={(e) => onHandleChange("department", e)}
              value={employees.department}
            />
            <TextInput
              style={styles.TextInput}
              textColor="#0F1A4D"
              label="Position"
              name="position"
              onChangeText={(e) => onHandleChange("position", e)}
              value={employees.position}
            />
            <TextInput
              style={styles.TextInput}
              textColor="#0F1A4D"
              label="Employment Date"
              name="employmentDate"
              onChangeText={(e) => onHandleChange("employmentDate", e)}
              value={employees.employmentDate}
            />
            <TextInput
              style={styles.TextInput}
              textColor="#0F1A4D"
              label="Dependents"
              name="dependents"
              onChangeText={(e) => onHandleChange("dependents", e)}
              value={employees.dependents}
            />
            <TextInput
              style={styles.TextInput}
              label="Mobile"
              textColor="#0F1A4D"
              name="mobile"
              onChangeText={(e) => onHandleChange("mobile", e)}
              value={employees.mobile}
            />
            <TextInput
              style={styles.TextInput}
              textColor="#0F1A4D"
              label="Street"
              name="street"
              onChangeText={(e) => onHandleChange("street", e)}
              value={employees.street}
            />
            <TextInput
              style={styles.TextInput}
              textColor="#0F1A4D"
              label="Postal Code"
              name="postalCode"
              onChangeText={(e) => onHandleChange("postalCode", e)}
              value={employees.postalCode}
            />
            <TextInput
              textColor="#0F1A4D"
              style={styles.TextInput}
              label="City"
              name="city"
              onChangeText={(e) => onHandleChange("city", e)}
              value={employees.city}
            />

            <TextInput
              textColor="#0F1A4D"
              style={styles.TextInput}
              label="Province"
              name="province"
              onChangeText={(e) => onHandleChange("province", e)}
              value={employees.province}
            />

            <Button
              style={styles.button}
              labelStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              title="Register"
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text>Update Profile</Text>
            </Button>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: "#FAF5F3",
    position: "relative",
  },

  button: {
    color: "white",
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    borderRadius: 20,
    backgroundColor: "#E1705D",
    paddingHorizontal: 0,
    marginVertical: 30,
    borderColor: "#E1705D",
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: "center",
  },

  TextInput: {
    backgroundColor: "#FAF5F3",
    marginVertical: 1,
    borderColor: "#0F1A4D",
    borderWidth: 1.5,
    fontSize: 16,
    
    
  },
});



export default EmployeeRegistrationForm;
