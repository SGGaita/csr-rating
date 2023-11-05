import { StyleSheet, Text, View, Image, TouchableOpacity, Share, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'
import { FONTS, icons, images } from '../constants'
import { useNavigation } from '@react-navigation/native';
import logo from '../constants/images'
import LinearGradient from 'react-native-linear-gradient';




export const DrawerContent = (props) => {

    const [url, setUrl] = useState('https://www.google.com/');

    const shareLink = async () => {
        await Share.share({
            message: `I came across CSR Rate Your Company| ${url}`,
            url,
            title:"CSR Rating"
        });
    };

    const backAction = () => {
        BackHandler.exitApp();
    };

    useEffect(() => {

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return

        () => {
            backHandler.remove();
        };
    }, []);

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor:'#1c53b3' }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.logoContainer}>
                        <View>
                            <Image source={logo} resizeMode='contain'  />
                        </View>
                    </View>
                    <LinearGradient colors={['#0390f5', '#1c53b3']} style={styles.linearGradient}>
                    <View style={{padding:15}}>
                            <Text style={{color:'white', ...FONTS.h3}}>General</Text>
                        </View>
                        <DrawerItemList {...props} />
                    <View style={styles.drawerSection}  >
                        <View style={{padding:15}}>
                            <Text style={{color:'white', ...FONTS.h3}}>Tools</Text>
                        </View>
                         <DrawerItem
                            icon={(color, size) => (
                                <Image
                                    source={icons.settings}
                                    resizeMode='contain'
                                    style={{ tintColor: '#fff', width: 20, height: 20 }}
                                />
                            )}
                            
                            label={({ focused, color }) => <Text style={{ color:'white',...FONTS.h4 }}>Settings</Text>}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={(color, size) => (
                                <Image
                                    source={icons.help}
                                    resizeMode='contain'
                                    style={{ tintColor: '#fff', width: 20, height: 20 }}
                                />
                            )}
                            label={({ focused, color }) => <Text style={{ color:'white',...FONTS.h4 }}>Help and Support</Text>}
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={(color, size) => (
                                <Image
                                    source={icons.share}
                                    resizeMode='contain'
                                    style={{ tintColor: '#fff', width: 20, height: 20 }}
                                />
                            )}
                            label={({ focused, color }) => <Text style={{ color:'white' ,...FONTS.h4 }}>Share</Text>}
                            onPress={shareLink}
                        />
                         <DrawerItem
                            icon={(color, size) => (
                                <Image
                                    source={icons.info}
                                    resizeMode='contain'
                                    style={{ tintColor: '#fff', width: 20, height: 20 }}
                                />
                            )}
                            label={({ focused, color }) => <Text style={{ color:'white' ,...FONTS.h4 }}>About</Text>}
                            onPress={() => { }}
                        />



                    </View>
                    </LinearGradient>

                </View>
            </DrawerContentScrollView>



            <View style={styles.bottomDrawerSection}

            >
                {/* <View style={styles.socialMediaContainer}>
                    <Text style={{ ...FONTS.h3, fontWeight: 700, marginBottom: 10 }}>Follow Us</Text>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <TouchableOpacity style={{ paddingVertical: 5, paddingRightl:10 }}>
                            <Image source={icons.facebook} resizeMode='contain' style={{ tintColor: 'grey', width: 20, height: 20 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal:10 }}>
                            <Image source={icons.twitter} resizeMode='contain' style={{ tintColor: 'grey', width: 20, height: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal:10 }}>
                            <Image source={icons.youtube} resizeMode='contain' style={{ tintColor: 'grey', width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View> */}

               <TouchableOpacity
               onPress={backAction} 
               style={{backgroundColor:'white', margin:10, paddingVertical:15,elevation:2,borderRadius:5, flexDirection:'row', alignItems:'center', justifyContent:'center'}}
               >
                <Image resizeMode='contain' style={{width:20, height: 20, paddingHorizontal:20 }} source={icons.exit}/>
                <Text style={{...FONTS.h3}}>Sign Out</Text>
               </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor:'white'
        
    }
    ,
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragragh: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        borderBottomColor: '#fff',
        borderBottomWidth: 0.5,
        
    },
   
    drawerItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },

    bottomDrawerSection: {
       
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 0.5
    },
    socialMediaContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})