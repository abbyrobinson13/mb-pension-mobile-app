import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-paper';
// import NetworkInfo from 'react-native-network-info';

// const getIP = async () => {
//   try {
//     const ip = await NetworkInfo.getIPAddress();
//     console.log('IP Address: ', ip);
//     return ip;
//   } catch (error) {
//     console.error(error);
//   }
// };
// `${ip}:5001`

const EmployeeRegistrationForm = () => {

  const [employees, setEmployees] = useState(null);

  const ipAndPort = '10.0.0.139:5001';
  console.log(ipAndPort);

  useEffect(() => {
    const getEmployees = async () => {
      try {

        let response = await fetch(`http://${ipAndPort}/api/employee/`)
        // , {
        //   method: 'POST',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     firstName: 'name1',
        //     lastName: 'lastname1',
        //     gender: 'female1',
        //     dateOfBirth: '1-Feb-1979',
        //     email: 'email7@test.com',
        //     department: 'department1',
        //     position: 'dev1',
        //     employmentDate: '1-Feb-2015',
        //     dependents: '4',
        //     mobile: '403 998-4321',
        //     street: '500 Test steet 112 Rd NW',
        //     postalCode: 'T3G 4J9',
        //     city: 'Calgary',
        //     province: 'AB',
        //     occupation: '',
        //     Industry: ''
        //   })
        // });

        let employeeData = await response.json();
        console.log(employeeData);
        setEmployees(employeeData);
      } catch (ex) {
        console.error(`Problems fetching:${ex.message}`);
      }
    };
    getEmployees();
  }, []);

  // const getAllEmployees = async () => {
  //   const employees = await employees.find();
  //   return employees;
  // };

  // const getEmployeeByEmail = async (email) => {
  //   const employee = await employee.findByEmail(email);
  //   console.log(employee)
  //   return employee;
  // };

  return (
    <View style={styles.container}>
      {employees ? (
        employees.map((employees) => <Text>{employees.email}</Text>)
      ) : (
        <Text> "No employees found... yet!"</Text>
      )}

      {employees && <TextInput label="First Name" />}
      {!employees && <Text>'No first name'</Text>}
      {employees && <TextInput label="Last Name" />}
      {!employees && <Text>'No last name'</Text>}
      {employees && <TextInput label="Gender" />}
      {!employees && <Text>'No gender'</Text>}
      {employees && <TextInput label="Date of birth" />}
      {!employees && <Text>'No date of birth'</Text>}
      {employees && <TextInput label="Email" />}
      {!employees && <Text>'No email address'</Text>}
      {employees && <TextInput label="Department" />}
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
    </View>
  );
};

export default EmployeeRegistrationForm;

const styles = StyleSheet.create({});
