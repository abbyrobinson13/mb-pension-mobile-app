import { CONCERNS } from "../data/areasOfConcern.js";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ConcernGridTile from "../components/ConcernGridTile.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider.js";
import { FirebaseContext } from "../firebase.js";
import ButtonFlatList from "../shared/ButtonFlatList.js";
import { ipAndPort } from "../config.js";
const QuestionnaireTwo = ({ navigation }) => {
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

  const renderConcernItem = (itemData, picked, setPicked) => {
    return (
      <ConcernGridTile
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
    //console.log ('concerns){"Addiction": true, "Anxiety": true}
    const selectedConcerns = Object.keys(picked).filter((key) => picked[key]);
    console.log(selectedConcerns);
    await saveConcerns(selectedConcerns);
  };

  const saveConcerns = async (concerns) => {
    const selectedConcerns = concerns.map(c => c);
    console.log("concern", concerns);
    const response = await fetch(
      `http://${ipAndPort}/api/employee/byAuthId/${user.uid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
          areasOfConcern: selectedConcerns
        }),
      }
    );
    const newEmployee = await response.json();
    console.log(newEmployee);
    navigation.navigate('Questionnaire Three');
  };
  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style = {styles.quizTitle}>
        <Text style= {styles.heading} >
          What are you looking for help with?
        </Text>
        <Text style = {styles.tapForMore}>Tap for more information. </Text>
        </View>
      )}
      data={CONCERNS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ConcernGridTile
          title={item.title}
          picked={picked}
          setPicked={setPicked}
          image={item.image}
        />
      )}
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
    fontSize: 50,
    marginTop: 35,
    marginBottom: 25,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 18,
    fontWeight: "bold",
    textAlign: "center",
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
    justifyContent: "center",
  alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textAlign: "center",
  },
  tapForMore: {
    color: "#e1705d",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft:40
  },
  heading: {
    fontSize: 20,
    color: "#0f1a4d",
    fontWeight: "bold",

  }
});
export default QuestionnaireTwo;
