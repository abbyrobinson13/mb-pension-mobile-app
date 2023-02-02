
import { useState } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";

const ImpactGridTile = ({ title, picked, setPicked }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const modalIcon = require("../assets/information.png");
  const modalImage = require("../assets/modal.png");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View
      style={[styles.gridItem, selected ? styles.buttonPressed : styles.button]}
    >
      <Pressable
        //android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => {
          setSelected(!selected);
          const choice = !selected;
          if (choice) {
            setPicked({ ...picked, [title]: true });
          } else {
            setPicked({ ...picked, [title]: false });
          }
        }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default ImpactGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 100,
    width:50,
    borderRadius: 6,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "hidden" ? "hidden" : "visible",

  },
  button: {
    flex: 1
  },
  buttonPressed: {
    //opacity: 0.5,
    backgroundColor: "orange",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign:"center",
    //marginRight: 10,
    
   
  },
  
});
