
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { OnboardingScreen, HomeScreen, AboutScreen, LibrariesScreen, PrivacyPolicyScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './src/components/DrawerContent';
import { Image, } from 'react-native';
import { icons, FONTS } from './src/constants';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RateScoreScreen from './src/screens/RateScoreScreen';

const Drawer = createDrawerNavigator();



const App = () => {
  

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Provider store={store}>
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#1c53b3'
        }}
        initialRouteName='Privacy'>
        <Drawer.Screen name="Onboarding" options={{ headerShown: false, swipeEnabled: false, drawerItemStyle: { height: 0 } }} component={OnboardingScreen} />
        <Drawer.Screen name="Rate your company" component={HomeScreen}
          options={{
            drawerIcon: () => (<Image
              source={icons.home}
              resizeMode='contain'
              style={{ tintColor: '#fff', width: 20, height: 20 }}
            />),

            title: "Rate Your Organization",
            drawerLabelStyle: { color: 'white', ...FONTS.h4 }
          }}

        />
        <Drawer.Screen name="Score" component={RateScoreScreen}
          options={{
            headerShown:true, 
            drawerItemStyle: { height: 0 },    
            title: "Rating score",

            //title: "Rating results",
            drawerLabelStyle: { color: 'white', ...FONTS.h4 }
          }}

        />
      
      <Drawer.Screen name="Privacy" options={{headerShown:false}}  component={PrivacyPolicyScreen} />
        <Drawer.Screen name="About" options={{ drawerItemStyle: { height: 0 } }} component={AboutScreen} />
        <Drawer.Screen name="Attribution" options={{title:'Licences and Attribution', drawerItemStyle: { height: 0 } }} component={LibrariesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
    ;
}


export default App;
