
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { OnboardingScreen, HomeScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './src/components/DrawerContent';
import MediaScreen from './src/screens/MediaScreen';
import HopkinsModelScreen from './src/screens/HopkinsModelScreen';
import { Image } from 'react-native';
import { icons,FONTS } from './src/constants';

const Drawer = createDrawerNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <NavigationContainer >
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}
    screenOptions={{
      drawerActiveBackgroundColor:'#1c53b3'
    }}
    >
      <Drawer.Screen name="Onboarding" options={{headerShown:false, swipeEnabled:false, drawerItemStyle: { height: 0 }}} component={OnboardingScreen}/>
      <Drawer.Screen name="Rate your company" component={HomeScreen}
      options={{
        drawerIcon:()=>( <Image
          source={icons.home}
          resizeMode='contain'
          style={{ tintColor: '#fff', width: 20, height: 20 }}
      />),
     
        title:"Rate Your Organization",
        drawerLabelStyle:{color:'white',...FONTS.h4}
      }}
     
      />
      <Drawer.Screen name="Media" component={MediaScreen}
      options={{
        
        drawerIcon:()=>( <Image
          source={icons.media}
          resizeMode='contain'
          style={{ tintColor: '#fff', width: 20, height: 20 }}
      />),
        title:"Media and Publication",
        drawerLabelStyle:{color:'white' ,...FONTS.h4}
      }} 
      />
      <Drawer.Screen name="Model" component={HopkinsModelScreen} 
      options={{
        drawerIcon:()=>( <Image
          source={icons.model}
          resizeMode='contain'
          style={{ tintColor: '#fff', width: 20, height: 20 }}
      />),
        title:"Hopkins Model",
        drawerLabelStyle:{color:'white' ,...FONTS.h4}
      }}
      />
    </Drawer.Navigator>
  </NavigationContainer>;
}


export default App;
