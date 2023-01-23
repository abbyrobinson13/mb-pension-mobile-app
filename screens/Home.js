import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';

const Separator = () => <View style={styles.separator} />;

const HomeScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        WELCOME
      </Text>
    </View>
    <View>
      <Image
        style={styles.brain}
        source={require ('../assets/HomeScreenBrain.png')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.textSize16}>
        Mental health prevention starts here.
      </Text>
    </View>
    <Separator />
    <View>
      <TouchableOpacity>
        <Button
          style={styles.button}
          labelStyle={{color: 'black', fontSize: 16, fontWeight: 'bold'}}
          onPress={() => navigation.navigate ('Login')}
        >
          Log in
        </Button>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity>
        <Button
          style={styles.button}
          labelStyle={{color: 'black', fontSize: 16, fontWeight: 'bold'}}
          onPress={() => navigation.navigate ('Create Password')}
        >
          Create Password
        </Button>
      </TouchableOpacity>
    </View>
    <Separator />
  </SafeAreaView>
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#9AC6DF',
  },
  title: {
    textAlign: 'center',
    marginVertical: 4,
    fontSize: 40,
    fontWeight: 'bold',
  },
  textSize16: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
  },
  brain: {
    height: 300,
    width: 350,
    resizeMode: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
    width: 240,
    borderRadius: 10,
    marginHorizontal: 60,
    elevation: 4,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
