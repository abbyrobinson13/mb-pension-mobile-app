import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

const EmployeeRegistrationForm = () => {
  const [employees, setEmployees] = useState(null);

  const ipAndPort = '10.44.22.29:5001';
  console.log(ipAndPort);

  const [email, setNewEmail] = useState('');
  function handleEmail(enteredText) {
    setNewEmail(enteredText);
    console.log(email);
  }
  const [newFirstName, setNewFirstName] = useState('');
  function handleFirstName(enteredText) {
    setNewFirstName(enteredText);

    console.log(newFirstName);
  }

  const [newLastName, setNewLastName] = useState('');
  function handleLastName(enteredText) {
    setNewLastName(enteredText);
    console.log(newLastName);
  }
  const [newGender, setNewGender] = useState('');
  function handleGender(enteredText) {
    setNewGender(enteredText);
    console.log(newGender);
  }

  const [newDatOfBirth, setNewDateOfBirth] = useState('');

  function handleDOB(enteredText) {
    setNewDateOfBirth(enteredText);
    console.log(newDatOfBirth);
  }
  const [newDepartment, setNewDepartment] = useState('');

  function handleDepartment(enteredText) {
    setNewDepartment(enteredText);
    console.log(newDepartment);
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
      newFirstName,
      newLastName,
      newLastName
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
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.scrollView}>
        {/* {employees ? (
          employees.map((employees) => <Text>{employees.firstName}</Text>)
        ) : (
          <Text> "No employees found... yet!"</Text>
        )} */}

        {employees && (
          <TextInput
            label="Email"
            onChangeText={handleEmail}
            value={email}
          />
        )}

        {!employees && <Text>'No email address'</Text>}

        {employees && (
          <TextInput
            label="First Name"
            onChangeText={handleFirstName}
            value={newFirstName}
          />
        )}

        {!employees && <Text>'No first name'</Text>}

        {employees && (
          <TextInput
            label="Last Name"
            onChangeText={handleLastName}
            value={newLastName}
          />
        )}

        {!employees && <Text>'No last name'</Text>}

        {employees && (
          <TextInput
            label="Gender"
            onChangeText={handleGender}
            value={newGender}
          />
        )}
        {!employees && <Text>'No gender'</Text>}

        {employees && (
          <TextInput
            label="Date of birth"
            onChangeText={handleDOB}
            value={newDatOfBirth}
          />
        )}
        {!employees && <Text>'No date of birth'</Text>}

        {employees && (
          <TextInput
            label="Department"
            onChangeText={handleDepartment}
            value={newDepartment}
          />
        )}

        {!employees && <Text>'No department'</Text>}

        {employees && <TextInput label="Position" />}
        {!employees && <Text>'No position'</Text>}

        {employees && <TextInput label="Employment Date" />}
        {!employees && <Text>'No employment date'</Text>}

        {employees && <TextInput label="Dependents" />}
        {!employees && <Text>'No dependents'</Text>}

        {employees && <TextInput label="Mobile" />}
        {!employees && <Text>'No mobile'</Text>}

        {employees && <TextInput label="Street" />}
        {!employees && <Text>'No street'</Text>}

        {employees && <TextInput label="Postal Code" />}
        {!employees && <Text>'No postal code'</Text>}

        {employees && <TextInput label="City" />}
        {!employees && <Text>'No city'</Text>}

        {employees && <TextInput label="Province" />}
        {!employees && <Text>'No province'</Text>}

        {employees && <TextInput label="Policy Number" />}
        {!employees && <Text>'No policyNumber'</Text>}

        {employees && <TextInput label="Employee Number" />}
        {!employees && <Text>'No employeeNumber'</Text>}

        {
          <Button
            title="Register"
            on
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

export default EmployeeRegistrationForm;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightblue',
    marginHorizontal: 20
  },
  text: {
    fontSize: 42
  }
});

// const getEmployeeByEmail = async (email) => {
//   const employee = await employee.findByEmail(email);
//   console.log(employee)
//   return employee;
// };

//Submit Registration Form
//  const handleSubmit = async () => {

//     const response = await fetch('http://${ipAndPort}/api/employee', {
//       method: 'POST',
//       body:
//     });

// const answer = await response.json();
// if (response.ok) {
//   console.log('ok');
//   setStatus('success');
// } else {
//   console.log('not ok', answer);
//   setStatus(answer.writeErrors[0].errmsg);
// }
// };
