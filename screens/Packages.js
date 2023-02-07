import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Packages = () => {
  return (
    <View style={styles.container}>
      <Text>Packages</Text>
    </View>
  );
};

export default Packages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
