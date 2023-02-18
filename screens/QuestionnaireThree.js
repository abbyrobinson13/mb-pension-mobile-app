import { IMPACT } from "../data/impactMentalHealth.js";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImpactGridTile from "../components/ImpactGridTile.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider.js";
import { FirebaseContext } from "../firebase.js";
import ButtonFlatList from "../shared/ButtonFlatList.js";
import { ipAndPort } from "../config.js";
const QuestionnaireThree = ({ navigation }) => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const auth = fbContext.auth;
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const buttonText = "Next";
  const [employees, setEmployees] = useState(null);
  //const ipAndPort = "10.44.22.75:5001";
  console.log(ipAndPort);
  console.log(auth);
  console.log("user", user);
  const [picked, setPicked] = useState();
  console.log(picked);

  const renderImpactItem = (itemData, picked, setPicked) => {
    return (
      <ImpactGridTile
        title={itemData.item.title}
        picked={picked}
        setPicked={setPicked}
      />
    );
  };
  useEffect(() => {
    const getEmployees = async () => {
      try {
        let response = await fetch(`http://${ipAndPort}/api/employee`);
        let data = await response.json();
        console.log(data);
        setEmployees(data);
      } catch (ex) {
        console.error(`Problems fetching:${ex.message}`);
      }
    };
    getEmployees();
  }, []);

  const pressHandler = async () => {
    const selectedImpacts = Object.keys(picked).filter((key) => picked[key]);
    console.log(selectedImpacts);
    await saveImpacts(selectedImpacts);
  };

  const saveImpacts = async (impacts) => {
    console.log("impact", impacts);
    const selectedImpacts = impacts.map((i) => i);
    const response = await fetch(
      `http://${ipAndPort}/api/employee/byAuthId/${user.uid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          impactOnMentalHealth: selectedImpacts,
        }),
      }
    );
    const newEmployee = await response.json();
    console.log(newEmployee);
    navigation.navigate("ContentHome", { screen: "Home" });
  };
  return (
    <FlatList
      ListHeaderComponent={() => (
        <Text style={styles.quizTitle}>
          What factors are currently impacting your mental health?
        </Text>
      )}
      data={IMPACT}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderImpactItem(item, picked, setPicked)}
      numColumns={2}
      style={{ backgroundColor: "white" }}
      ListFooterComponent={() => (
        <View style={{ padding: 16 }}>
          <TouchableOpacity style={styles.button} onPress={pressHandler}>
            <Text style={styles.text}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  quizTitle: {
    color: "#0f1a4d",
    fontSize: 20,
    marginTop: 35,
    marginBottom: 25,
    marginLeft: 10,
    marginLeft: "auto",
    marginRight: "auto",
  
    padding: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#e1705d",
    borderWidth: 1,
    height: 60,
    width: 350,
    borderRadius: 40,
    borderColor: "white",
    marginLeft:"auto",
    marginRight: "auto",
    marginTop: 20,
    marginHorizontal: 60,
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textAlign: "center",
    marginTop: 15,
  },
});
export default QuestionnaireThree;
