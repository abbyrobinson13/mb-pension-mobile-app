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
    {/* <Text style={styles.title}>
        WELCOME
      </Text>
    */}
    
      <Image
        style={styles.brain}
        resizeMode="contain"
        source={require ('../assets/bblogo.png')}
        
      />
      
      <Text style={styles.textSize16}>
        Mental health prevention starts here.
      </Text>
    
    
   </View>
   
    <Separator />
    <View>
      <TouchableOpacity>
        <Button
          style={styles.button}
          labelStyle={{color: "#0F1A4D", fontSize: 16, fontWeight: 'bold'}}
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
          labelStyle={{color: "#0F1A4D", fontSize: 16, fontWeight: 'bold'}}
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
    //marginHorizontal: 16,
    backgroundColor: "#0F1A4D",
 marginTop: 0
    
  },
  title: {
    textAlign: 'center',
    marginVertical: 4,
    fontSize: 50,
    fontWeight: 'bold',
    color: "white",
    marginLeft: 1,
    marginBottom:80,
    paddingTop: 0,
    //fontStyle: "italic"
   
  },
  textSize16: {
    textAlign: 'center',
    fontSize: 23,
    //fontWeight: 'bold',
    color: "#e1705d",
    marginBottom:20,
    marginTop: 0,
    fontStyle: "italic"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
  },
  brain: {
    height: 200,
    width: 380,
    resizeMode: 'contain',
    marginLeft : 10,
    marginTop: 0,
    marginBottom: 20,
    
    
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 5,
    height: 60,
    width: 270,
    borderRadius: 10,
    marginHorizontal: 70,
    elevation: 4,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
  
  },
});

export default HomeScreen;
