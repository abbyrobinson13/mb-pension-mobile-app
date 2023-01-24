import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import AppStyles from '../styles/AppStyles';

export default function TermsConditionsForm({navigation}) {
  return (
    <View>
      <Text>Please, read and accept the terms and conditions:</Text>
      <ScrollView>
        <Text>
          ***********************************************************
          [Add Terms and conditions here]

          ***********************************************************
        </Text>
      </ScrollView>
      <View>
        <TouchableOpacity>
          <Button
            style={AppStyles.button}
            labelStyle={{color: 'black', fontSize: 16, fontWeight: 'bold'}}
            onPress={() =>
              navigation.navigate ('Create Password', {checkboxValue: true})}
          >
            ACCEPT
          </Button>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Button
            style={AppStyles.button}
            labelStyle={{color: 'black', fontSize: 16, fontWeight: 'bold'}}
            onPress={() => navigation.navigate ('Login')}
          >
            DECLINE
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}
