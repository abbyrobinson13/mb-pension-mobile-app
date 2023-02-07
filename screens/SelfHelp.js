import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SelfHelp = () => {
  return (
    <View style={styles.container}>
      <Text>Self-Help</Text>
    </View>
  );
};

export default SelfHelp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
