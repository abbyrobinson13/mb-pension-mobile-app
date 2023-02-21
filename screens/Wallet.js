import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { List, MD3Colors } from "react-native-paper";
import React, { useState, useEffect, useContext } from "react";
import { ipAndPort } from "../config";
import { AuthContext } from "../AuthProvider.js";
import { FirebaseContext } from "../firebase.js";

const Wallet = () => {
  const [expanded, setExpanded] = useState(true);
  const [benefits, setBenefits] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  const authContext = useContext(AuthContext);
  const user = authContext.user;

  console.log(ipAndPort);
  // console.log(auth);
  console.log("user", user.uid);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [benefitsResponse, employeesResponse] = await Promise.all([
          fetch(`http://${ipAndPort}/api/benefits`),
          fetch(`http://${ipAndPort}/api/employee`),
        ]);
        const [benefitsData, employeesData] = await Promise.all([
          benefitsResponse.json(),
          employeesResponse.json(),
        ]);
        setBenefits(benefitsData);
        setEmployees(employeesData);
        setIsLoading(false);
      } catch (ex) {
        console.error(`Problems fetching: ${ex.message}`);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const userProfile = employees.find((employee) => employee.uid === user.uid);
  const userBenefits = benefits.find(
    (plan) => plan.companyName === userProfile.companyName
  );

  const paramedicalList = userBenefits?.insuranceCompany.value;

  if (userBenefits === undefined) {
    return (
      <View style={styles.titleContainter}>
        <Text style={styles.title}>Benefits Wallet</Text>
        <Text>No benefits ... Please wait for company to add information</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#FAF5f3" }}>
      <View style={styles.titleContainter}>
        <Text style={styles.title}>Paramedical Services</Text>
      </View>
      {paramedicalList.map((para) => (
        <List.Accordion
          key={para}
          title={para}
          titleStyle={{
            color: "#0f1a4d",
            fontWeight: "bold",
          }}
        >
          <List.Item
            title={
              "Annual Maximum Amount: $" +
              userBenefits.practitionerAnnualMaxAmount.value
            }
            titleStyle={{ color: "#0f1a4d" }}
            left={(props) => (
              <List.Icon {...props} icon="cash" color="#0f1a4d" />
            )}
          />
          <List.Item
            title={
              "Percentage of Visit Covered: " +
              userBenefits.coinsuranceParamedical.value +
              "%"
            }
            titleStyle={{ color: "#0f1a4d" }}
            left={(props) => (
              <List.Icon {...props} icon="percent" color="#0f1a4d" />
            )}
          />
        </List.Accordion>
      ))}
      <View style={styles.titleContainter}>
        <Text style={styles.title}>Wellness Account</Text>
      </View>
      <List.Accordion
        title={userBenefits.spendingAccountKind.value}
        titleStyle={{
          color: "#0f1a4d",
          fontWeight: "bold",
        }}
      >
        <List.Item
          title={
            "Annual Maximum Amount: $" +
            userBenefits.spendingAccountsAnnualAmount.value
          }
          titleStyle={{
            color: "#0f1a4d",
          }}
          left={(props) => <List.Icon {...props} icon="percent" />}
        />
      </List.Accordion>
    </ScrollView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   color: "blue",
  // },
  title: {
    fontSize: 25,
    color: "white",
  },
  titleContainter: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: 5,
    margin: 20,
    backgroundColor: "#E1705D",
  },
});
