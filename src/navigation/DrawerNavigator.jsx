import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home1" component={HomeScreen} />
    </Drawer.Navigator>
  )
}



const styles = StyleSheet.create({})