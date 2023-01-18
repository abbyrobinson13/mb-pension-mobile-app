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

    const [province, setNewProvince] = useState('');
    function handleProvince(enteredText) {
      setNewProvince(enteredText);
      console.log(province);
    }

    const [policyNumber, setNewPolicyNumber] = useState('');
    function handlePolicyNumber(enteredText) {
      setNewPolicyNumber(enteredText);
      console.log(policyNumber);

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
        // navigation.navigate('Login');
      };

      return (
        <ScrollView>
          <View style={styles.scrollView}>
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
                value={firstName}
              />
            )}

            {!employees && <Text>'No first name'</Text>}

            {employees && (
              <TextInput
                label="Last Name"
                onChangeText={handleLastName}
                value={lastName}
              />
            )}

            {!employees && <Text>'No last name'</Text>}

            {employees && (
              <TextInput
                label="Gender"
                onChangeText={handleGender}
                value={gender}
              />
            )}
            {!employees && <Text>'No gender'</Text>}

            {employees && (
              <TextInput
                label="Date of birth"
                onChangeText={handleDOB}
                value={dateOfBirth}
              />
            )}
            {!employees && <Text>'No date of birth'</Text>}

            {employees && (
              <TextInput
                label="Department"
                onChangeText={handleDepartment}
                value={department}
              />
            )}

            {!employees && <Text>'No department'</Text>}

            {employees && (
              <TextInput
                label="Position"
                onChangeText={handlePosition}
                value={position}
              />
            )}

            {!employees && <Text>'No position'</Text>}

            {employees && (
              <TextInput
                label="Employment Date"
                onChangeText={handleEmployementDate}
                value={employmentDate}
              />
            )}

            {!employees && <Text>'No employment date'</Text>}

            {employees && (
              <TextInput
                label="Dependents"
                onChangeText={handleDependents}
                value={dependents}
              />
            )}

            {!employees && <Text>'No dependents'</Text>}

            {employees && (
              <TextInput
                label="Mobile"
                onChangeText={handleMobile}
                value={mobile}
              />
            )}

            {!employees && <Text>'No mobile'</Text>}

            {employees && (
              <TextInput
                label="Street"
                onChangeText={handleStreet}
                value={street}
              />
            )}
            {!employees && <Text>'No street'</Text>}

            {employees && (
              <TextInput
                label="Postal Code"
                onChangeText={handlePostalCode}
                value={postalCode}
              />
            )}
            {!employees && <Text>'No postal code'</Text>}

            {employees && (
              <TextInput label="City" onChangeText={handleCity} value={city} />
            )}

            {!employees && <Text>'No city'</Text>}

            {employees && (
              <TextInput
                label="Province"
                onChangeText={handleProvince}
                value={province}
              />
            )}

            {!employees && <Text>'No province'</Text>}

            {employees && (
              <TextInput
                label="Policy Number"
                onChangeText={handlePolicyNumber}
                value={policyNumber}
              />
            )}

            {!employees && <Text>'No policyNumber'</Text>}

            {employees && (
              <TextInput
                label="Employee Number"
                onChangeText={handleEmployeeNumber}
                value={employeeNumber}
              />
            )}

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
    }

    
    const styles = StyleSheet.create({
      scrollView: {
        backgroundColor: 'lightblue',
        marginHorizontal: 20
      },
      text: {
        fontSize: 42
      }
    });
  }
};
export default EmployeeRegistrationForm;
