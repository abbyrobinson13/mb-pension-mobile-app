import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const ContentList = () => {
  const [content, setContent] = useState(null);
  const ipAndPort = "192.168.68.51:5001";
  console.log(ipAndPort);

  useEffect(() => {
    const getContent = async () => {
      try {
        let response = await fetch(`http://${ipAndPort}/api/content`);
        let data = await response.json();
        console.log(data);
        setContent(data);
      } catch (ex) {
        console.error(`Problems fetching: ${ex.message}`);
      }
    };
    getContent();
  }, []);

  return (
    <View style={styles.container}>
      {content ? (
        content.map((row) => <Text>{row.title}</Text>)
      ) : (
        <Text>'No superheroes found...yet!'</Text>
      )}
    </View>
  );
};

export default ContentList;

const styles = StyleSheet.create({});
