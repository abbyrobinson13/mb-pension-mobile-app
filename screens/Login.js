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
import React from 'react';
import InlineTextButton from '../components/InlineTextButton';
import {auth} from '../firebase';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

export default function Login({navigation}) {
  const background = require ('../assets/background.jpg');

  if (auth.currentUser) {
    navigation.navigate ('Placeholder Screen');
  } else {
    onAuthStateChanged (auth, user => {
      if (user) {
        navigation.navigate ('Placeholder Screen');
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState ('');
  let [email, setEmail] = React.useState ('');
  let [password, setPassword] = React.useState ('');

  let login = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword (auth, email, password)
        .then (userCredential => {
          navigation.navigate ('Placeholder Screen', {
            user: userCredential.user,
          });
          setErrorMessage ('');
          setEmail ('');
          setPassword ('');
        })
        .catch (error => {
          setErrorMessage (error.message);
        });
    } else {
      setErrorMessage ('Please, enter an email and password');
    }
  };

  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === 'ios' ? padding : null}
        keyboardVerticalOffset={60}
      >
        <Text style={AppStyles.lightText}>Login</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
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
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.lightText}>
            Don't have an account?
          </Text>
          <InlineTextButton
            text=" Sign Up"
            onPress={() => navigation.navigate ('Sign Up')}
          />
        </View>
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.lightText}>
            Forgotten your password?
          </Text>
          <InlineTextButton
            text=" Reset"
            onPress={() => navigation.navigate ('Reset Password')}
          />
        </View>
        <Button title="Login" onPress={login} color={'#01796f'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
