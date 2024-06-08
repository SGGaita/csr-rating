import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const LibrariesScreen = () => {
    const navigation = useNavigation();

    const handleNavigation = () => {
      navigation.navigate('Illustration');
    };

  return (
    <View style={styles.container}>
    

     <View style={styles.itemContainer}>
        <Text style={styles.heading}>Open Source Libraries</Text>

        <ScrollView style={{paddingVertical:20}}>
        <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                @react-native-masked-view/masked-view
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                @react-navigation/native
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-native-linear-gradient
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-native-onboarding-swiper
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-native-reanimated
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-native-safe-area-context
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-native-screens
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-native-share
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-native-splash-screen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                react-redux
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            >
                <Text style={{ ...FONTS.body1 }}>
                redux
                </Text>
            </TouchableOpacity>
        </ScrollView>
        
     </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    padding:20
},
itemContainer:{
    marginBottom:20
},
heading:{
    ...FONTS.h3,
    marginBottom:10,
    fontWeight:'500'
},
button:{
    paddingVertical:20,
    paddingHorizontal:10,
    backgroundColor:'#fff',
    elevation:1,
    borderRadius:5,
    marginBottom:10
}

})

