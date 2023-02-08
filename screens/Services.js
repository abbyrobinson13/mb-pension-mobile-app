import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ContentList from "../components/ContentList";
const Services = () => {
  return (
    <View style={styles.container}>
      <ContentList />
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
