import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking, Share } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images } from '../constants'
import logo from '../constants/images'

export const AboutScreen = () => {
  const [url, setUrl] = useState('https://play.google.com/store/apps/details?id=com.csrfi.csr.csr');
  const [email, setEmail] = useState('admin@mhciternational.com');
  const [telephone, setTel] = useState('+61 89647 2156');


  const shareLink = async () => {
    await Share.share({
      message: `Check out CSR Rate Your Company| ${url}`,
      url,
    });
  };

  const handleSocial = (socialItem) => {
    switch (socialItem) {
      case 'facebook':
        // Open the Facebook page
        Linking.openURL('http://facebook.com/csrfi');
        break;
      case 'twitter':
        // Open the Twitter page
        Linking.openURL('http://twitter.com/csrfi');
        break;
      case 'linkedin':
        // Open the LinkedIn page
        Linking.openURL('http://www.linkedin.com/company/csrfi');
        break;
      case 'website':
        // Open the LinkedIn page
        Linking.openURL('http://www.csrfi.com');
        break;
      case 'review':
        // Open the LinkedIn page
        Linking.openURL('https://play.google.com/store/apps/details?id=com.csrfi.csr.csr');
        break;
      case 'share':
        // Open the LinkedIn page
        shareLink()
        break;
        case 'telephone':
          // Open the LinkedIn page
          Linking.openURL(`tel:${telephone}`)
          break;
      case 'email':
        // Open the LinkedIn page
        Linking.openURL(`mailto:${email}`)
        break;
      default:
        // Handle unknown social media items
        console.log('Unknown social media item:', socialItem);
    }
  };



  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image source={logo} resizeMode='contain' style={{ width: 120, height: 80 }} />
      </View>

      <ScrollView style={styles.textContainer}>
        <View style={styles.itemContainer}>
          <Image source={icons.www} resizeMode='contain' style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => handleSocial('website')}
            >
              <Text style={{ ...FONTS.h3 }}>
                Visit the CSRIF website
              </Text>
              <Text style={{ ...FONTS.body2, color: 'grey', lineHeight: 18, marginTop: 5 }}>
                CSR Rating is a systems approach to running a company or organisation responsibly as outlined in our CSR Model.
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.itemContainer}>
          <Image source={icons.share} resizeMode='contain' style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => handleSocial('share')}
            >
              <Text style={{ ...FONTS.h3 }}>
                Share CSR Rating
              </Text>
              <Text style={{ ...FONTS.body2, color: 'grey', marginTop: -2 }}>
                Share CSR Rating with your collegues and peers.
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.itemContainer}>
          <Image source={icons.review} resizeMode='contain' style={{ tintColor: 'black', width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => handleSocial('review')}
            >
              <Text style={{ ...FONTS.h3 }}>
                Leave a Play Store review
              </Text>
              <Text style={{ ...FONTS.body2, color: 'grey', lineHeight: 18, marginTop: 5 }}>
                Your positive review increases the visibility of the App in the Play Store.
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.itemContainer}>
          <Image source={icons.licence} resizeMode='contain' style={{ tintColor: 'black', width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ ...FONTS.h3 }}>
              Open source libraries/licenses
            </Text>
            <Text style={{ ...FONTS.body2, color: 'grey', lineHeight: 18, marginTop: 5 }}>
              Attribution is the key to sharing.
            </Text>
          </View>

        </View>

        <View style={styles.itemContainer}>
          <Image source={icons.contact} resizeMode='contain' style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ ...FONTS.h3 }}>
              Contact us
            </Text>
            <View style={{ marginTop: 2 }}>
              <View style={{ flexDirection: 'row' }}>
             
                <Text style={{ ...FONTS.h4 }}>Telephone:</Text>
                <TouchableOpacity
                  onPress={() => handleSocial('telephone')}
                >
                <Text style={{ ...FONTS.h4, color: 'grey' }}> +61 89647 2156</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...FONTS.h4 }}>Email:</Text>
                <TouchableOpacity
                  onPress={() => handleSocial('email')}
                >
                  <Text style={{ ...FONTS.h4, color: 'grey' }}> admin@mhciternational.com</Text>

                </TouchableOpacity>

              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...FONTS.h4 }}>Website:</Text>
                <TouchableOpacity
                  onPress={() => handleSocial('email')}
                >
                <Text style={{ ...FONTS.h4, color: 'grey' }}> www.csrfi.com</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.itemContainer}>
          <Image source={icons.social} resizeMode='contain' style={{ width: 30, height: 30 }} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ ...FONTS.h3 }}>
              Social Media
            </Text>
            <View style={styles.socialMediaContainer}>
              <TouchableOpacity style={{ padding: 10, marginRight: 10 }}
                onPress={() => handleSocial('facebook')}
              >
                <Image source={icons.facebook} resizeMode='contain' style={{ width: 15, height: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 10, marginRight: 10 }}
                onPress={() => handleSocial('twitter')}
              >
                <Image source={icons.twitter} resizeMode='contain' style={{ width: 15, height: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 10, marginRight: 10 }}
                onPress={() => handleSocial('linkedin')}
              >
                <Image source={icons.linkedin} resizeMode='contain' style={{ width: 15, height: 15 }} />
              </TouchableOpacity>
            </View>
          </View>

        </View>



        <View style={{ alignSelf: 'center', alignItems: 'center', marginBottom: 15 }}>
          <Text style={{ ...FONTS.body3 }}>Version 1.0.0</Text>
          <Text style={{ ...FONTS.h4 }}> All Rights Reserved</Text>
        </View>

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: 'white'
  },
  textContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  title: {
    ...FONTS.h3,
    color: COLORS.primary,
    paddingVertical: 10,

  },
  contentText: {
    color: '#000',
    ...FONTS.body2,
    textAlign: 'justify'

  },
  socialMediaContainer: {
    flexDirection: 'row',
  }
})