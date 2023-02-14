import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { List, MD3Colors } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { ipAndPort } from "../config";

const Wallet = () => {
  const [expanded, setExpanded] = useState(true);
  const [benefits, setBenefits] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    const getBenefits = async () => {
      try {
        let response = await fetch(`http://${ipAndPort}/api/benefits`);
        let data = await response.json();
        setBenefits(data);
        setIsLoading(false);
      } catch (ex) {
        console.error(`Problems fetching: ${ex.message}`);
      }
    };
    getBenefits();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const paramedicalList = benefits[0].insuranceCompany.value;
  console.log(paramedicalList);

  return (
    <ScrollView>
      <View style={styles.titleContainter}>
        <Text style={styles.title}>Paramedical Services</Text>
      </View>
      {paramedicalList.map((para) => (
        <List.Accordion title={para} style={{ color: "red" }}>
          <List.Item
            title={
              "Annual Maximum Amount: $" +
              benefits[0].practitionerAnnualMaxAmount.value
            }
            left={(props) => <List.Icon {...props} icon="cash" />}
          />
          <List.Item
            title={
              "Percentage of Visit Covered: " +
              benefits[0].coinsuranceParamedical.value +
              "%"
            }
            left={(props) => <List.Icon {...props} icon="percent" />}
          />
        </List.Accordion>
      ))}
      <View style={styles.titleContainter}>
        <Text style={styles.title}>Wellness Account</Text>
      </View>
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
    color: "black",
  },
  titleContainter: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#D2E3EC",
  },
});
