import React from 'react'
import { HomeScreen, LibrariesScreen, OnboardingScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
