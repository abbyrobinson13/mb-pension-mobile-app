import { ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Text, Button, Avatar } from "react-native-paper";
import { ipAndPort } from "../config";

const ContentList = ({ category }) => {
  const [content, setContent] = useState(null);
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
    <ScrollView style={styles.container}>
      {content ? (
        content
          .filter((row) => row.category === category)
          .map((row) => (
            <Card style={styles.card}>
              <Card.Content>
                <Text variant="titleLarge">{row.title}</Text>
                <Text variant="bodyMedium">{row.description}</Text>
              </Card.Content>
              <Card.Cover style={styles.image} source={{ uri: row.img }} />
              <Card.Actions>
                <Button>Link</Button>
                <Button>Save</Button>
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
    height: 350,
    width: 300,
    margin: 20,
  },
  image: {
    display: "flex",
    alignContent: "center",
    margin: 10,
  },
});
