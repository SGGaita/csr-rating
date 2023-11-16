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

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={{ fontSize: 16, color: COLORS.primary }}>Home</Text>
        <Image source={icons.rightArrow} resizeMode='contain' style={{ marginLeft: 5, width: 25, height: 20, tintColor: "black" }} />
      </TouchableOpacity>
    )
  }

  

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient colors={['#0390f5', '#1c53b3']} style={styles.linearGradient}>
        <View style={styles.container}>
          <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
           // DoneButtonComponent={doneButton}
            
            bottomBarHighlight={false}
            containerStyles={{ padding: SIZES.padding * 2 }}
            titleStyles={{ ...FONTS.h1,}}
            subTitleStyles={{ ...FONTS.body1, marginTop: 10 }}

            pages={[
              {
                backgroundColor: 'transparent',
                image: <Image source={require('../assets/images/csr.png')} resizeMode='contain' style={{ width: SIZES.width * 0.8 ,height: SIZES.height * 0.8}} />,
                title: `Assess your CSR/Sustainability`,
               subtitle: 'Helping organizations measure and improve their CSR/Sustainability',
              },

            ]}
          />
        </View>

      </LinearGradient>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
    
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor:COLORS.secondary,
     //paddingVertical: SIZES.padding 
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