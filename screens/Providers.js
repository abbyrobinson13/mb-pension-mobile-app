import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContentList from "../components/ContentList";

const Providers = () => {
  return (
    <View style={styles.container}>
      <ContentList category="Practitioners" />
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
