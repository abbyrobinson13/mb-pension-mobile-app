import {
  Text,
  View,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import AppStyles from '../styles/AppStyles';
import {Button} from 'react-native-paper';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import {auth} from '../firebase';
import {sendPasswordResetEmail} from 'firebase/auth';

export default function ResetPassword({navigation}) {
  // const background = require ('../assets/background.jpg');

  let [email, setEmail] = React.useState ('');
  let [errorMessage, setErrorMessage] = React.useState ('');

  let resetPassword = () => {
    sendPasswordResetEmail (auth, email)
      .then (() => {
        navigation.popToTop ();
      })
      .catch (error => {
        setErrorMessage (error.message);
      });
  };

  return (
    <View style={AppStyles.imageContainer}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === 'ios' ? padding : null}
        keyboardVerticalOffset={60}
      >
        <Text style={AppStyles.darkText28}>Reset Password</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput
          style={AppStyles.textInput}
          placeholder="Email"
          placeholderTextColor="#FAF5F3"
          value={email}
          onChangeText={setEmail}
        />
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.darkText16}>
            Don't have an account?
          </Text>
          <InlineTextButton
            text=" Create password"
            color={'#FAF5F3'}
            fontSize="16"
            onPress={() => navigation.navigate ('Create Password')}
          />
        </View>
        <Button
          title="Reset Password"
          type='outlined'
          onPress={resetPassword}
          color={'#01796f'}
        />
        <View>
          <TouchableOpacity>
            <Button
              style={AppStyles.button}
              labelStyle={{color: '#0F1A4D', fontSize: 20, fontWeight: 'bold'}}
              onPress={resetPassword}
            >
              Reset Password
            </Button>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
