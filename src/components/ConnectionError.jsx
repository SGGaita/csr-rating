import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FONTS, SIZES } from '../constants';

export const ConnectionError = ({  onPressCancel }) => {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'white',justifyContent:'center',borderRadius:10, paddingHorizontal:20, height:SIZES.height/3.5}}>
                <Text style={{...FONTS.h1, fontWeight:'700', marginBottom:10, alignSelf:'center'}}>You're offline!</Text>
                <Text style={styles.text}>Turn on your internet to to proceed.</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button1} title="Cancel" onPress={onPressCancel}>
                        <Text style={{ color: '#fff', fontSize: 18, lineHeight: 25 }}>OK</Text>
                        </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
        position: 'absolute', // Overlays the main content
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 20
    },
    text: {
        color: '#000',
        fontSize: 18,
        marginBottom: 20,
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    button1:{
        marginVertical: 10,
        backgroundColor:'#3ba5c4',
        borderRadius:30,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },

    button2:{
        marginVertical: 10,
        backgroundColor:'',
        height:50,
        alignItems:'center',
        justifyContent:'center'
    }
});