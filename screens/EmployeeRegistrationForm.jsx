import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

const EmployeeRegistrationForm = ({ navigation }) => {
  const [employees, setEmployees] = useState(null);

  const ipAndPort = '10.0.0.139:5001';
  console.log(ipAndPort);

  const [email, setNewEmail] = useState('');
  function handleEmail(enteredText) {
    setNewEmail(enteredText);
    console.log(email);
  }
  const [firstName, setNewFirstName] = useState('');
  function handleFirstName(enteredText) {
    setNewFirstName(enteredText);

    console.log(firstName);
  }

  const [lastName, setNewLastName] = useState('');
  function handleLastName(enteredText) {
    setNewLastName(enteredText);
    console.log(lastName);
  }
  const [gender, setNewGender] = useState('');
  function handleGender(enteredText) {
    setNewGender(enteredText);
    console.log(gender);
  }

  const [dateOfBirth, setNewDateOfBirth] = useState('');
  function handleDOB(enteredText) {
    setNewDateOfBirth(enteredText);
    console.log(dateOfBirth);
  }
  const [department, setNewDepartment] = useState('');
  function handleDepartment(enteredText) {
    setNewDepartment(enteredText);
    console.log(department);
  }
  const [position, setNewPosition] = useState('');
  function handlePosition(enteredText) {
    setNewPosition(enteredText);
    console.log(position);
  }
  const [employmentDate, setNewEmployementDate] = useState('');
  function handleEmployementDate(enteredText) {
    setNewEmployementDate(enteredText);
    console.log(employmentDate);
  }
  const [dependents, setNewdependents] = useState('');
  function handleDependents(enteredText) {
    setNewdependents(enteredText);
    console.log(dependents);
  }
  const [mobile, setNewMobile] = useState('');
  function handleMobile(enteredText) {
    setNewMobile(enteredText);
    console.log(mobile);
  }
  const [street, setNewStreet] = useState('');
  function handleStreet(enteredText) {
    setNewStreet(enteredText);
    console.log(street);
  }
  const [postalCode, setNewPostalCode] = useState('');
  function handlePostalCode(enteredText) {
    setNewPostalCode(enteredText);
    console.log(postalCode);
  }
  const [city, setNewCity] = useState('');
  function handleCity(enteredText) {
    setNewCity(enteredText);
    console.log(city);
  }
  const [province, setNewProvince] = useState('');
  function handleProvince(enteredText) {
    setNewProvince(enteredText);
    console.log(province);
  }

  const [policyNumber, setNewPolicyNumber] = useState('');
  function handlePolicyNumber(enteredText) {
    setNewPolicyNumber(enteredText);
    console.log(policyNumber);
  }

  const [employeeNumber, setNewEmployeeNumber] = useState('');
  function handleEmployeeNumber(enteredText) {
    setNewEmployeeNumber(enteredText);
    console.log(employeeNumber);
  }

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

  const handleSubmit = async () => {
    const employeeData = {
      email,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      department,
      position,
      employmentDate,
      dependents,
      mobile,
      street,
      postalCode,
      city,
      province,
      policyNumber,
      employeeNumber
    };
    let response = await fetch(`http://${ipAndPort}/api/employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeData)
    });

    let data = await response.json();
    console.log(data);
    navigation.navigate('Placeholder Screen');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {employees && (
          <TextInput
            style={styles.textInput}
            label="Email"
            onChangeText={handleEmail}
            value={email}
          />
        )}

        {!employees && <Text>'No email address'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="First Name"
            onChangeText={handleFirstName}
            value={firstName}
          />
        )}

        {!employees && <Text>'No first name'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Last Name"
            onChangeText={handleLastName}
            value={lastName}
          />
        )}

        {!employees && <Text>'No last name'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Gender"
            onChangeText={handleGender}
            value={gender}
          />
        )}
        {!employees && <Text>'No gender'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Date of birth"
            onChangeText={handleDOB}
            value={dateOfBirth}
          />
        )}
        {!employees && <Text>'No date of birth'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Department"
            onChangeText={handleDepartment}
            value={department}
          />
        )}

        {!employees && <Text>'No department'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Position"
            onChangeText={handlePosition}
            value={position}
          />
        )}

        {!employees && <Text>'No position'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Employment Date"
            onChangeText={handleEmployementDate}
            value={employmentDate}
          />
        )}

        {!employees && <Text>'No employment date'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Dependents"
            onChangeText={handleDependents}
            value={dependents}
          />
        )}

        {!employees && <Text>'No dependents'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Mobile"
            onChangeText={handleMobile}
            value={mobile}
          />
        )}

        {!employees && <Text>'No mobile'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Street"
            onChangeText={handleStreet}
            value={street}
          />
        )}
        {!employees && <Text>'No street'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Postal Code"
            onChangeText={handlePostalCode}
            value={postalCode}
          />
        )}
        {!employees && <Text>'No postal code'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="City"
            onChangeText={handleCity}
            value={city}
          />
        )}

        {!employees && <Text>'No city'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Province"
            onChangeText={handleProvince}
            value={province}
          />
        )}

        {!employees && <Text>'No province'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Policy Number"
            onChangeText={handlePolicyNumber}
            value={policyNumber}
          />
        )}

        {!employees && <Text>'No policyNumber'</Text>}

        {employees && (
          <TextInput
            style={styles.textInput}
            label="Employee Number"
            onChangeText={handleEmployeeNumber}
            value={employeeNumber}
          />
        )}

        {!employees && <Text>'No employeeNumber'</Text>}

        {
          <Button
            style={styles.button}
            title="Register"
            onPress={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: '#9AC6DF',
    position: 'relative'
  },
  button: {
    borderWidth: 3,
    borderColor: 'white',
    height: 60,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginVertical: 20,
    borderColor: 'white',
    elevation: 4,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: 0,
    borderColor: 'white',
    height: 0,
    borderRadius: 8,
    backgroundColor: 'lightcyan',
    paddingHorizontal: 6,
    marginVertical: 2,
    borderColor: 'white',
    elevation: 20,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
    justifyContent: 'center'
  }
});
export default EmployeeRegistrationForm;
