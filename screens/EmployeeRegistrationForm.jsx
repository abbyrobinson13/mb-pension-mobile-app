import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { FirebaseContext } from "../firebase";
import { AuthContext } from "../AuthProvider";
// import { format } from "date-fns";

const EmployeeRegistrationForm = ({ navigation }) => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const auth = fbContext.auth;
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const [employees, setEmployees] = useState(null);
  

  const ipAndPort = "10.44.22.29:5001";
  console.log(ipAndPort);
  // console.log("the employee", employees);

  // const [email, setNewEmail] = useState(user.email);

  // function handleEmail(enteredText) {
  //   setNewEmail(enteredText);
  //   // console.log(email);
  // }
  const onHandleChange = (name, e) => {
    setEmployees({ ...employees, [name]: e });
  };

  // const [department, setNewDepartment] = useState("");
  // function handleDepartment(enteredText) {
  //   setNewDepartment(enteredText);
  //   // console.log(department);
  // }
  // const [position, setNewPosition] = useState("");
  // function handlePosition(enteredText) {
  //   setNewPosition(enteredText);
  //   // console.log(position);
  // }
  // const [employmentDate, setNewEmployementDate] = useState("");
  // function handleEmployementDate(enteredText) {
  //   setNewEmployementDate(enteredText);
  //   // console.log(employmentDate);
  // }
  // const [dependents, setNewdependents] = useState("");
  // function handleDependents(enteredText) {
  //   setNewdependents(enteredText);
  //   // console.log(dependents);
  // }
  // const [mobile, setNewMobile] = useState("");
  // function handleMobile(enteredText) {
  //   setNewMobile(enteredText);
  //   // console.log(mobile);
  // }
  // const [street, setNewStreet] = useState("");
  // function handleStreet(enteredText) {
  //   setNewStreet(enteredText);
  //   // console.log(street);
  // }
  // const [postalCode, setNewPostalCode] = useState("");
  // function handlePostalCode(enteredText) {
  //   setNewPostalCode(enteredText);
  //   // console.log(postalCode);
  // }
  // const [city, setNewCity] = useState("");
  // function handleCity(enteredText) {
  //   setNewCity(enteredText);
  //   // console.log(city);
  // }
  // const [province, setNewProvince] = useState("");
  // function handleProvince(enteredText) {
  //   setNewProvince(enteredText);
  //   // console.log(province);
  // }

  // Refactor this so that we only fetch one employee
  // We want to fetch the current employee

  useEffect(() => {
    const getEmployees = async () => {
      try {
        let response = await fetch(
          `http://${ipAndPort}/api/employee/byEmail/${user.email}`
        );
        let data = await response.json();
        console.log("thedata", data);

        setEmployees(data);
      } catch (ex) {
        console.error(`Problems fetching:${ex.message}`);
      }
    };
    getEmployees();
  }, []);

  const handleSubmit = async () => {
    // const employeeData = {
    //   // email,
    //   department,
    //   position,
    //   employmentDate,
    //   dependents,
    //   mobile,
    //   street,
    //   postalCode,
    //   city,
    //   province,
    // };
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

  return (
    <ScrollView style={styles.container}>
      {employees && (
        <View style={styles.container}>
          {/* <TextInput
            style={styles.textInput}
            label="Email"
            onChangeText={handleEmail}
            value={email}
          /> */}

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
            Submit
          </Button>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 1,
    paddingHorizontal: 10,
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
  },
  text: {
    fontSize: 42,
  },
});
export default EmployeeRegistrationForm;
