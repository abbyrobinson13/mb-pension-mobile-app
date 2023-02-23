import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import Modal from "react-native-modal";

const Touchable = Platform.select({
  ios: () => TouchableNativeFeedback,
  android: () => TouchableNativeFeedback,
})();

const ConcernGridTile = ({ title, picked, setPicked, image }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const modalIcon = require("../assets/information.png");
  const [iconTapped, setIconTapped] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (isModalVisible) {
      setIconTapped(false);
    }
  };

  const onPress = () => {
    setSelected(!selected);
    const choice = !selected;
    if (choice) {
      setPicked({ ...picked, [title]: true });
    } else {
      setPicked({ ...picked, [title]: false });
    }
  };

  return (
    <View
      style={[styles.gridItem, selected ? styles.buttonPressed : styles.button]}
    >
      <Touchable
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple("#d9d9d9", false)}
      >
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setIconTapped(!iconTapped);
            }}
          >
            <Image
              style={[
                styles.infoButton,
                { tintColor: iconTapped ? "#e1705d" : "#0f1a4d" },
              ]}
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
                <Image source={image} size={30} />
                <Button
                  title="Close"
                  onPress={toggleModal}
                  color="#e1705d"
                  style={{ borderRadius: 200, width: 50, marginTop: 20 }}
                />
              </View>
            </Modal>
          </TouchableOpacity>
          <Text style={[styles.title, { color: "#0f1a4d" }]}>{title}</Text>
        </View>
      </Touchable>
    </View>
  );
};

export default ConcernGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 109,
    width: 50,
    borderRadius: 30,
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
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: "#FAF5F3",
    borderColor: "#e1705d",
    borderWidth: 2,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    //fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    //marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalInnerContainer: {
    backgroundColor: "white",
    borderRadius: 10,

    // padding: 5,
    // alignItems: "center",
    // justifyContent: "center",
  },

  infoButton: {
    position: "relative",
    top: 0,
    left: 0,
    margin: 10,
  },

  modal: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});
