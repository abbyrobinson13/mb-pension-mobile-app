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

const ConcernGridTile = ({ title, color }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const modalIcon = require("../assets/information.png");
  const modalImage = require("../assets/modal.png");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={[styles.gridItem, selected ? styles.buttonPressed : styles.button]}>
      <Pressable
        //android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
          
        ]}
        onPress={() => {
          setSelected(!selected);
        }}

      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              style={styles.infoButton}
              source={modalIcon}
              size={30}
              color="black"
            />
            <Modal
              style={styles.modal}
              transparent={true}
              isVisible={isModalVisible}
            >
              <View style={styles.modalInnerContainer}>
                <Image source={modalImage} size={30} />
                <Button title="Close" onPress={toggleModal} />
              </View>
            </Modal>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};
export default ConcernGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 65,
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
    flex: 1,
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalInnerContainer: {
    backgroundColor: "white",
  },

  infoButton: {
    //position:"left",
    top: 10,
    bottom: 80,
    right: 20,
    border: "none",
    marginLeft: 180,
    marginRight: 0,
  },

  modal: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});
