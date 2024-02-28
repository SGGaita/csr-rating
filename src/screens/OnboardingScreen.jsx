import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export const OnboardingScreen = () => {

  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Rate your company');
  }

  


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient colors={['#0390f5', '#1c53b3']} style={styles.linearGradient}>
        <View style={styles.container}>
          <Image source={require('../assets/images/csr.png')} resizeMode='contain' style={{ alignSelf: 'center', width: SIZES.width * 0.8, }} />
          <Text style={{ color: '#fff', fontSize: 31, lineHeight: 40, paddingBottom: 16 }}>Assess Your CSR/Sustainability </Text>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '200', lineHeight: 28, paddingBottom: 36 }}>Helping organizations measure and improve their CSR/Sustainability</Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: SIZES.padding * 1,

            }}
          >
            <TouchableOpacity
              style={{
                
                backgroundColor: '#3ba5c4',
                padding: SIZES.padding * 2,
                flex: 1,
                flexDirection: 'row',
                justifyContent:'space-between',
                borderRadius:30
              }}
              onPress={()=>handleDone()}
            >
              <Text style={{ color:'#fff',fontSize: 18, lineHeight: 25 }}>Get Started</Text>
              <View
              >
                <Image source={icons.rightArrow} resizeMode='contain' style={{ tintColor:'#fff',width: 24, height: 24, }} />
              </View>
            </TouchableOpacity>
          </View>


        </View>

      </LinearGradient>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,

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