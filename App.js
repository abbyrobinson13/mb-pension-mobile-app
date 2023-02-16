import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import HomeScreen from "./screens/Home";
import CreatePassword from "./screens/CreatePassword";
import ResetPassword from "./screens/ResetPassword";
import LoggingOut from "./screens/LoggingOut";
import EmployeeRegistrationForm from "./screens/EmployeeRegistrationForm";
import TermsConditionsForm from "./screens/TermsConditions";
import QuestionnaireOne from "./screens/QuestionnaireOne";
import { FireBaseProvider } from "./firebase";
import { AuthProvider } from "./AuthProvider";
import QuestionnaireTwo from "./screens/QuestionnaireTwo";
import { StatusBar } from "react-native";
import QuestionnaireThree from "./screens/QuestionnaireThree";
import BottomNavBar from "./screens/BottomNavBar";
import TopNavBar from "./screens/TopNavBar";
import ContentHome from "./screens/ContentHome";
import UpdateEmployeeProfile from "./screens/UpdateEmployeeProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FireBaseProvider>
      <AuthProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MB Pension and Benefits Group"
              component={HomeScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Create Password"
              component={CreatePassword}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Terms and Conditions"
              component={TermsConditionsForm}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Reset Password"
              component={ResetPassword}
              options={{ headerShown: true }}
            />

            <Stack.Screen
              name="Employee Registration Form"
              component={EmployeeRegistrationForm}
              options={{ headerShown: true }}
            />

            <Stack.Screen
              name="Questionnaire One"
              component={QuestionnaireOne}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Questionnaire Two"
              component={QuestionnaireTwo}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Questionnaire Three"
              component={QuestionnaireThree}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Log Out"
              component={LoggingOut}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ContentHome"
              component={BottomNavBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Update Profile"
              component={UpdateEmployeeProfile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </FireBaseProvider>
  );
}
