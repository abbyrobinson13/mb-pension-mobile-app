import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import AppStyles from '../styles/AppStyles';
import React, {useEffect} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import {auth} from '../firebase';
import Checkbox from 'expo-checkbox';
const ipAndPort='10.44.22.18:5001'

export default function CreatePassword({navigation, route}) {
  const background = require ('../assets/background.jpg');
  let [email, setEmail] = React.useState ('');
  let [password, setPassword] = React.useState ('');
  let [confirmPassword, setConfirmPassword] = React.useState ('');
  let [validationMessage, setValidationMessage] = React.useState ('');
  useEffect (
    () => {
      if (route?.params?.checkboxValue) {
        setIsChecked (true);
      } else {
        setIsChecked (false);
      }
    },
    [route]
  );
  const [isChecked, setIsChecked] = React.useState (false);

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage ('Passwords do not match');
    } else {
      setValidationMessage ('');
    }
    setValue (value);
  };

  let createPassword = async() => {
    console.log('line 50');
    if (password === confirmPassword && isChecked) {
      console.log('line 53');
      let response = await fetch(`http://${ipAndPort}/api/employee/byEmail/${email}`)
      if (response.ok) {
        console.log('line55');
      createUserWithEmailAndPassword (auth, email, password)
        .then (userCredential => {
          sendEmailVerification (auth.currentUser);
          setValidationMessage ('Successfully signed up with MB Group Ltd.');
          navigation.navigate ('Employee Registration Form', {
            user: userCredential.user,
          });
        })
        .catch (error => {
          console.log(error)
          setValidationMessage ('invalid registration');
        });
      } else {
        setValidationMessage ('Please, contact your employer')
      }
    }
  };
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60}
      >
        <Text style={AppStyles.lightText}>Create Password</Text>
        <Text style={AppStyles.errorText}>{validationMessage}</Text>
        <TextInput
          style={AppStyles.textInput}
          placeholder="Email"
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={AppStyles.textInput}
          placeholder="Password"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={AppStyles.textInput}
          placeholder="Confirm Password"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={value =>
            validateAndSet (value, password, setConfirmPassword)}
        />
        <View style={AppStyles.rowContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={() => setIsChecked (!isChecked)}
          />
          <InlineTextButton
            text="Terms and Conditions"
            onPress={() => navigation.navigate ('Terms and Conditions')}
          />
        </View>

        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.lightText}>Already have a password?</Text>
          <InlineTextButton
            text=" Login"
            onPress={() => navigation.popToTop ('Logout')}
          />
        </View>
        <Button title="Create Password" onPress={createPassword} color={'#01796f'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}