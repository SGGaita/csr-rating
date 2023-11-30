import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'


import { COLORS, SIZES } from '../constants';
import { RateFormComponent } from '../components';

export const HomeScreen = () => {
  const [visible, setVisible] = useState(true);

  const hideSpinner = () => {
    setVisible(false);
  };
  const showSpinner = () => {
    setVisible(true);
  };


  

  return (
    <View style={{ flex: 1, padding:SIZES.padding}}>
      <RateFormComponent/>
    </View>
  )
}

