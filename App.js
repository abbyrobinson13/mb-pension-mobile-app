import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import PlaceholderScreen from './screens/PlaceholderScreen';
import EmployeeRegistrationForm from './screens/EmployeeRegistrationForm';
import TermsConditionsForm from './screens/TermsConditions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
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
          name="Placeholder Screen"
          component={PlaceholderScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Employee Registration Form"
          component={EmployeeRegistrationForm}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="QuestionaireA Form"
          component={QuestionaireA}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
