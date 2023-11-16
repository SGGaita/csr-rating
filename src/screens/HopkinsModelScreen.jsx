import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const HopkinsModelScreen = () => {
    return (
        <WebView source={{ uri: 'https://www.csrfi.com/hopkinscsrmodel' }} style={{ flex: 1 }} />
      )
}

export default HopkinsModelScreen

const styles = StyleSheet.create({})