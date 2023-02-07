import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Providers = () => {
  return (
    <View style={styles.container}>
      <Text>Providers</Text>
    </View>
  );
};

export default Providers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
