import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

export default function TermsConditionsForm({navigation}) {
  const [isChecked, setIsChecked] = React.useState (false);

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
      <Button
        title="Accept"
        onPress={() =>
          navigation.navigate ('Sign Up', {checkBoxValue: isChecked})}
        color={'#9AC6DF'}
      />
      <Button
        title="Decline"
        onPress={() => navigation.navigate ('Login')}
        color={'#9AC6DF'}
      />
    </View>
  );
}
