import {getAuth, signOut} from 'firebase/auth';
import {Button} from 'react-native';

const auth = getAuth ();

export default function LoggingOut({navigation}) {
  let logout = () => {
    signOut (auth).then (() => {
      navigation.popToTop ();
    });
  };

  return <Button title="Logout" onPress={logout} color={'#01796f'} />;
}
