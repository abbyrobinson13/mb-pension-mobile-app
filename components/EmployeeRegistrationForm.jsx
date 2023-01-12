import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const EmployeeRegistrationForm = () => {
  const [employees, setEmployees] = useState(null);
  const ipAndPort = '10.0.0.139:5001';
  console.log(ipAndPort);

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

  return (
    <View style={styles.container}>
      {employees ? (
        employees.map((employees) => <Text>{employees.email}</Text>)
      ) : (
        <Text> "No employees found... yet!"</Text>
      )}
    </View>
  );
};

export default EmployeeRegistrationForm;

const styles = StyleSheet.create({});
