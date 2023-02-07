import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopNavBar from "./TopNavBar.js";

const ContentHome = () => {
  return (
    <View style={styles.container}>
      <Text>ContentHome</Text>
    </View>
  );
};

export default ContentHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
