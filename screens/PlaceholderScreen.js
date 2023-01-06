import {View, Text, Button} from 'react-native';
import AppStyles from '../styles/AppStyles';

export default function PlaceholderScreen({navigation}) {
  return (
    <View style={AppStyles.container}>
      <Button title="Placeholder" />
    </View>
  );
}

//TODO: Need to determine the content of this screen
