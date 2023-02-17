import { ScrollView, StyleSheet, Linking, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  Text,
  Button,
  ActivityIndicator,
  Drawer,
} from "react-native-paper";
import { ipAndPort } from "../config";
import { AuthContext } from "../AuthProvider.js";

const ContentList = ({ category }) => {
  const [content, setContent] = useState(null);
  const [benefits, setBenefits] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  const authContext = useContext(AuthContext);
  const user = authContext.user;
  console.log(user.uid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentResponse, benefitsResponse, employeesResponse] =
          await Promise.all([
            fetch(`http://${ipAndPort}/api/content`),
            fetch(`http://${ipAndPort}/api/benefits`),
            fetch(`http://${ipAndPort}/api/employee`),
          ]);
        const [contentData, benefitsData, employeesData] = await Promise.all([
          contentResponse.json(),
          benefitsResponse.json(),
          employeesResponse.json(),
        ]);
        setContent(contentData);
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
  console.log(paramedicalList);

  return (
    <ScrollView style={styles.container}>
      {content ? (
        content
          .filter((row) => row.category === category)
          .map((row) => (
            <Card style={styles.card}>
              <Card.Content>
                {category === "Practitioners" &&
                  paramedicalList.filter((item) => item === row.provider)
                    .length > 0 && (
                    <Drawer.Item
                      style={{
                        backgroundColor: "#e1705D",
                        height: 30,
                        marginLeft: 0,
                        width: 300,
                        marinTop: 20,
                        marginBottom: 20,
                      }}
                      icon="star"
                      label={row.provider + " You're covered"}
                    />
                  )}
                <Text variant="titleLarge">{row.title}</Text>
                <Text variant="bodyMedium">{row.description}</Text>
              </Card.Content>
              <Card.Cover style={styles.image} source={{ uri: row.img }} />
              <Card.Actions>
                <View style={styles.button}>
                  <Button onPress={() => Linking.openURL(row.url)}>Link</Button>
                </View>
              </Card.Actions>
            </Card>
          ))
      ) : (
        <Text>'No content found ... yet'</Text>
      )}
    </ScrollView>
  );
};

export default ContentList;

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: 325,
    margin: 20,
    backgroundColor: "#FAF5F3",
  },
  button: {
    paddingBottom: 10,
  },
  image: {
    display: "flex",
    alignContent: "center",
    margin: 10,
  },
});
