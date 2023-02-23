import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider.js";
import { FirebaseContext } from "../firebase.js";
import { ipAndPort } from "../config.js";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Log Out");
  };
  const handleRetake = () => {
    navigation.navigate("Questionnaire One");
  };
  const handleUpdate = () => {
    navigation.navigate("Update Profile");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [employeeData] = await Promise.all([
          fetch(`http://${ipAndPort}/api/employee`),
        ]);
        const [employeesData] = await Promise.all([employeeData.json()]);
        setEmployee(employeesData);
        setIsLoading(false);
      } catch (ex) {
        console.error(`Problems fetching: ${ex.message}`);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const userProfile = employee.find((e) => e.uid === user?.uid);
  console.log(userProfile);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageButton}>
          <Image
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
            style={styles.image}
          />
          <View style={styles.changeImageButton}>
            <Text style={styles.changeImageText}>
              <Icon name="camera" size={20} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>
          {userProfile.firstName} {userProfile.lastName}
        </Text>
        <Divider style={styles.divider} />
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Text style={styles.label}>Company:</Text>
            <Text style={styles.value}>{userProfile.companyName}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{userProfile.email}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>Birthday:</Text>
            <Text style={styles.value}>{userProfile.dateOfBirth}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>
              {userProfile.street}, {userProfile.city}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>(555) 555-1234</Text>
          </View>
        </View>
        <Divider style={styles.divider} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRetake}>
            <Text style={styles.buttonText}>Retake Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#faf5f3",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  imageButton: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  changeImageButton: {
    backgroundColor: "#e1705d",
    borderRadius: 15,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  changeImageText: {
    color: "#fff",
    fontWeight: "bold",
  },
  name: {
    color: "#0f1a4d",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsContainer: {
    alignItems: "flex-start",
  },
  detail: {
    flexDirection: "column",
    marginBottom: 5,
    marginTop: 10,
  },
  label: {
    color: "#0f1a4d",
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    color: "#0f1a4d",
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  button: {
    backgroundColor: "#e1705d",
    padding: 10,
    borderRadius: 30,
    width: "30%",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#0f1a4d",
    marginVertical: 5,
  },
});
