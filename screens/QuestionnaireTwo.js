import { CONCERNS } from "../data/areasOfConcern.js";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import ConcernGridTile from "../components/ConcernGridTile.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider.js";
import { FirebaseContext } from "../firebase.js";

function renderConcernItem(itemData) {
  return (
    <ConcernGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

const QuestionnaireTwo = ({navigation}) => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const auth = fbContext.auth;
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const [employees, setEmployees] = useState(null);
  const ipAndPort = "10.44.22.29:5001";
  console.log(ipAndPort);
  console.log(auth);
  console.log("user", user);



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

  const onPressHandle = async (reason) => {
    const response = await fetch(
      `http://${ipAndPort}/api/employee/byEmail/${user.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reasonForTreatment: `${reason}`,
        }),
      }
    );
    const newEmployee = await response.json();
    console.log(newEmployee);
    //navigation.navigate('Questionnaire Two');
  };
  return (
    
      <FlatList
        ListHeaderComponent={() => (
          <Text style={styles.quizTitle}>
            Please select from below your mental health concerns:
          </Text>
        )}
        data={CONCERNS}
        keyExtractor={(item) => item.id}
        renderItem={renderConcernItem}
        numColumns={2}
        style= {{backgroundColor:"orange"}}
      />
    
   
  );
};
const styles = StyleSheet.create({

  quizTitle: {
    color: "",
    fontSize: 25,
    marginTop: 35,
    marginBottom: 25,
    marginLeft: 10,
    padding: 18,
    fontWeight: "bold",
  },
  
});
export default QuestionnaireTwo;
