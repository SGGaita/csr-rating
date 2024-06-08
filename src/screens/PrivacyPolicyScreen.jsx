import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FONTS, SIZES } from '../constants';

export const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'center', alignItems: 'center', height: 50, elevation: 2, backgroundColor: '#fff' }}>
        <Text style={{ ...FONTS.h3, fontWeight: '700' }}>Data Usage & Privacy Policy</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.text}>
          This Privacy Policy describes how MHCi CSR (“we,” “us,” or “our”) collects, uses, and discloses your information in connection with your use of the MHCi CSR mobile application (the “App”).
        </Text>
        <Text style={styles.heading}>
        Information We Collect
          </Text>

          <Text style={styles.text}>
          We collect the following information when you use the App.
          </Text>
          <Text style={styles.text}>
          Organization Information: You will be asked to provide the following information about your organization:
          </Text>

          <View style={styles.list}>
        <Text style={styles.textlist}>
        - Organization Name
          </Text>

          <Text style={styles.textlist}>
        - Your Function
          </Text>

          <Text style={styles.textlist}>
        - Sector of Activity
          </Text>

          <Text style={styles.textlist}>
        - Country
          </Text>

          <Text style={styles.textlist}>
        - Company Size
          </Text>

          <Text style={styles.textlist}>
        - Email:We collect your email address to:
Contact you in case of important updates about the App or privacy policy.
          </Text>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  content: {
    padding: 20,
  },

  heading:{
    ...FONTS.h3,
    fontWeight: '700',
    lineHeight: 25,
    paddingBottom: SIZES.padding * 0.5
  },
  text: {
    ...FONTS.body1,
    fontWeight: '100',
    lineHeight: 25,
    textAlign: 'justify',
    paddingBottom: SIZES.padding * 0.5
  },

  textlist: {
    ...FONTS.body1,
    fontWeight: '700',
    lineHeight: 25,
    textAlign: 'justify',
    paddingBottom: SIZES.padding * 0.5
  },

  list: {
    ...FONTS.body1,
    fontWeight: '100',
    lineHeight: 25,
    textAlign: 'justify',
    paddingBottom: SIZES.padding * 0.5,
    marginLeft:10,
  },


});