import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonFlatList = (selected) => {
  const title = "Click Next";
  return (
    <TouchableOpacity style={styles.button}>
    
      <View>
      <Text style={styles.text}>{title} </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonFlatList;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    height: 60,
    width: 200,
    borderRadius: 40,
    borderColor: "white",
    marginLeft: 90,
    marginTop: 30,
    marginHorizontal: 60,
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "black",
    textAlign: "center",
    marginTop: 15,
    
    
  },
});
