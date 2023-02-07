import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Services = () => {
  return (
    <View style={styles.container}>
      <Text>Services</Text>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
