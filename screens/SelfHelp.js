import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContentList from "../components/ContentList";

const SelfHelp = () => {
  return (
    <View style={styles.container}>
      <ContentList category="SelfHelp" />
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
