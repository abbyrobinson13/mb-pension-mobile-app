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
  TouchableNativeFeedback,
} from "react-native";

const Touchable = Platform.select({
  ios: () => TouchableNativeFeedback,
  android: () => TouchableNativeFeedback,
})();

const ImpactGridTile = ({ title, picked, setPicked }) => {
  const [selected, setSelected] = useState(false);
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
          <Text style={[styles.title, { color: "#0f1a4d" }]}>{title}</Text>
        </View>
      </Touchable>
    </View>
  );
};
export default ImpactGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 100,
    width: 50,
    borderRadius: 30,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
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
    color: "#0f1a4d",
    //marginRight: 10,
  },
});
