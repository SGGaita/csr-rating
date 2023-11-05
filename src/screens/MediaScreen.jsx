import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const MediaScreen = () => {
  return (
    <WebView source={{ uri: 'https://club.csrfi.com/media-and-publication/' }} style={{ flex: 1 }} />
  )
}

export default MediaScreen

const styles = StyleSheet.create({})