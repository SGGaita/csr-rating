import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
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

