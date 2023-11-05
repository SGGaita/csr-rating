import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import { COLORS } from '../constants';

export const HomeScreen = () => {
  const [visible, setVisible] = useState(true);

  const hideSpinner = () => {
    setVisible(false);
  };
  const showSpinner = () => {
    setVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoadStart={() => showSpinner()}
        onLoad={() => hideSpinner()}
        source={{ uri: 'https://club.csrfi.com/rate-your-company/' }} style={{ flex: 1 }} />
      {visible && (
        <ActivityIndicator


          style={{

            flex:

              1, left:

              0, right:

              0, top:

              0, bottom:

              0, position: 'absolute', alignItems: 'center', justifyContent: 'center'
          }}
          size="large"
        />
      )}
    </View>
  )
}

