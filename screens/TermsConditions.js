import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity,StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import AppStyles from '../styles/AppStyles';

export default function TermsConditionsForm({navigation}) {
  return (
    <View>
      <Text> Please, read and accept the terms and conditions:</Text>
      <ScrollView>
        <Text style= {AppStyles.termsText}>
          **********************************************************
          Terms and Conditions
          Introduction
These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.

These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

Minors or people below 18 years old are not allowed to use this Website.

Intellectual Property Rights
Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

You are granted limited license only for purposes of viewing the material contained on this Website.

Restrictions
You are specifically restricted from all of the following:

publishing any Website material in any other media;
selling, sublicensing and/or otherwise commercializing any Website material;
publicly performing and/or showing any Website material;
using this Website in any way that is or may be damaging to this Website;
using this Website in any way that impacts user access to this Website;
using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;

        </Text>
        <Text>
        </Text>
      </ScrollView>
      <View>
        <TouchableOpacity>
          <Button
            style={AppStyles.button}
            labelStyle={{color: '#50C878', fontSize: 18}}
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
            labelStyle={{ color: '#FF0000', fontSize: 18 }}
            onPress={() => navigation.navigate ('Login')}
          >
            DECLINE
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}
