import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, Share, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'
import { FONTS, icons, images } from '../constants'
import { useNavigation } from '@react-navigation/native';
import logo from '../constants/images'
import LinearGradient from 'react-native-linear-gradient';




export const DrawerContent = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const [url, setUrl] = useState('https://www.google.com/');


    const handleCancel = () => {
        setIsVisible(false);
      };
    
      const handleAccept = () => {
        // Logout the user here
        setIsVisible(false);
      };

    const shareLink = async () => {
        await Share.share({
            message: `Check out CSR Rate Your Company| ${url}`,
            url,
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

    const logoutModal = ()=>{
        return(

            <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Are you sure you want to log out?</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button title="Cancel" onPress={handleCancel} />
          <Button title="Accept" onPress={handleAccept} />
        </View>
      </View>
    </Modal>
        )
        
    } 


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
                         {/* <DrawerItem
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
                        /> */}

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
                            onPress={() => { navigation.navigate('About')}}
                        />



                    </View>
                    </LinearGradient>

                </View>
            </DrawerContentScrollView>



            <View style={styles.bottomDrawerSection}

            >

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