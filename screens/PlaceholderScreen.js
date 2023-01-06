import {
  View,
  Text,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import AppStyles from '../styles/AppStyles';
import background from '../assets/background.jpg';

export default function PlaceholderScreen({navigation}) {
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === 'ios' ? padding : null}
        keyboardVerticalOffset={60}
      >
        <Text style={AppStyles.lightText}>
          PLACEHOLDER SCREEN!
          WHO IS TAKING IT FROM HERE?
        </Text>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

//TODO: Need to determine the content of this screen
