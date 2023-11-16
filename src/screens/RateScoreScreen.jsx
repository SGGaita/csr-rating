import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'
import ScoreComponent from '../components/ScoreComponent'

const RateScoreScreen = () => {
  return (
    <View style={{ flex: 1, padding:SIZES.padding}}>
      <ScoreComponent/>
    </View>
  )
}

export default RateScoreScreen

const styles = StyleSheet.create({})