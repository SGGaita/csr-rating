import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import {  SIZES, icons } from '../constants'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { addEventListener } from '@react-native-community/netinfo';
import { ConnectionError } from '../components';

export const OnboardingScreen = () => {

  const navigation = useNavigation();
  const [isConnected, setIsConnected] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const handleDone = () => {
    if (isConnected) {
      navigation.navigate('Rate your company');
    } else {
      setShowError(true);
    }
  }

  

  const handleCancelError = () => {
    setShowError(false);
  }




  return (
    <SafeAreaView style={styles.safeAreaView}>
      {showError && (
            <ConnectionError style={styles.error}  onPressCancel={handleCancelError} />
          )}
      <LinearGradient colors={['#ffffff','#1c53b3']} style={styles.linearGradient}>
        <View style={styles.container}>
          {/* ... other content */}
          
          <Image source={require('../assets/images/logo.png')} resizeMode='contain' style={{ flex:1,alignSelf: 'center', width: SIZES.width * 0.5, }} />
          <View style={{flex:1, flexDirection:"column", position:'relative',}}>
          <View style={{flex:2, flexDirection:'column', justifyContent:'flex-end'}}>
          <Text style={{ color: '#fff', fontWeight:'600',fontSize: 40, lineHeight: 40, paddingBottom: 16 }}>Assess Your CSR/Sustainability </Text>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '200', lineHeight: 28, paddingBottom: 36 }}>Helping organizations measure and improve their CSR/Sustainability</Text>
          </View>
          
          <View
            style={{
              flexDirection: 'row',
              marginVertical: SIZES.padding * 1,

            }}
          >
            <TouchableOpacity
              style={{
flex:1,
                backgroundColor: '#329fbf',
                padding: SIZES.padding * 2,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 30,
                width:'100%',
                elevation:1,
              }}
              onPress={() => handleDone()}
            >
              <Text style={{ color: '#fff', fontSize: 18, lineHeight: 25 }}>Get Started</Text>
              <View
              >
                <Image source={icons.rightArrow} resizeMode='contain' style={{ tintColor: '#fff', width: 24, height: 24, }} />
              </View>
            </TouchableOpacity>
          </View>
          </View>
         


        </View>

      </LinearGradient>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    position: 'relative',
    zIndex: 2
  },

  linearGradient: {
    flex: 1,
    padding: SIZES.padding * 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
    // justifyContent:'center'
    // backgroundColor:COLORS.secondary,
    paddingHorizontal: SIZES.padding
  },
  onboard: {
    padding: SIZES.padding * 2
  },
  doneButton: {
    flex: 1,
    flexDirection: 'row',
    padding: SIZES.padding * 2,
    backgroundColor: "#97d5ea",
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  nextButton: {
    flex: 1,
    flexDirection: 'row',
    padding: SIZES.padding,
    backgroundColor: "#adecf7",
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  }

})