import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import CreatePassword from './screens/CreatePassword';
import ResetPassword from './screens/ResetPassword';
import PlaceholderScreen from './screens/PlaceholderScreen';
import EmployeeRegistrationForm from './screens/EmployeeRegistrationForm';
import TermsConditionsForm from './screens/TermsConditions';
import QuestionnaireOne from './screens/QuestionnaireOne';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator ();

export default function App () {
  return (
    //added Home Screen
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Create Password"
          component={CreatePassword}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Terms and Conditions"
          component={TermsConditionsForm}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Reset Password"
          component={ResetPassword}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Employee Registration Form"
          component={EmployeeRegistrationForm}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Placeholder Screen"
          component={PlaceholderScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Questionnaire One"
          component={QuestionnaireOne}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
