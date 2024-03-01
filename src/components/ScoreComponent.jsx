import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { FONTS, SIZES } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectScore } from '../redux/rateSlice'
import { useNavigation } from '@react-navigation/native';


const ScoreComponent = () => {
    const score = useSelector(selectScore)
    const navigation = useNavigation()
   


    const chart = [
        {
            id: 1,
            range: '0 to 0.1',
            description: '    Very poor level of social responsibility'
        },
        {
            id: 2,
            range: '0.1 to 0.2',
            description: 'Poor level of social responsibility'
        },
        {
            id: 3,
            range: '0.3 to 0.4',
            description: 'A lot to do to achieve social responsibility'
        },
        {
            id: 4,
            range: '0.4 to 0.5',
            description: 'Below average level of social responsibility'
        },
        {
            id: 5,
            range: '0.5 to 0.6',
            description: 'Average level of social responsibility'
        },
        {
            id: 6,
            range: '0.6 to 0.7',
            description: 'Above average level of social responsibility'
        },
        {
            id: 7,
            range: '0.7 to 0.8',
            description: 'Very Good level of social responsibility'
        },
        {
            id: 8,
            range: '0.8 to 0.9',
            description: 'Excellent level of social responsibility'
        },

        {
            id: 9,
            range: '0.9 to 1.0',
            description: 'A model company!'
        }
    ]

    const backActionHandler = () => {
        // Handle back button press logic here (e.g., navigate back, show confirmation)
        navigation.navigate('Rate your company');
        return true; // Consumes the back press event
      };
    
      useEffect(() => {
        const backHandlerSubscription = BackHandler.addEventListener(
          'hardwareBackPress',
          backActionHandler
        );
    
        return () => backHandlerSubscription.remove();
      }, []);

    return (
        <View style={styles.container} >
            <View style={styles.scoreContainer}>
                <Text style={{ ...FONTS.h1, color: '#1c53b3' }}>Your Result  </Text>
                <Text style={{ fontSize: 40, fontWeight: '700', color: '#1c53b3' }}>
                    {score}
                </Text>
            </View>

            <View style={styles.ratingChart}>
                {
                    chart.map((item) => {
                        return <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: SIZES.padding }}>
                            <View>
                                <Text style={{ ...FONTS.h2 }}>{item.range}</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ marginLeft: SIZES.padding * 2, ...FONTS.body1, justifyContent: 'flex-start', textAlign: 'left' }}>{item.description}</Text>
                            </View>

                        </View>
                    })
                }

                <View>
                    <Text style={{ ...FONTS.body1, lineHeight: 20, paddingVertical: 10 }}>
                        (Scores based on results from hundreds of replies received internationally)
                        For a full analysis of results of other companies in your sector and/or how you can improve your company’s score contact us by e-mail
                    </Text>
                </View>

            </View>

        </View>
    )
}

export default ScoreComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
        flexDirection: 'column',
        //justifyContent:'center',
        // alignItems:'center'

    },
    scoreContainer: {
        paddingTop: SIZES.padding * 1,
        paddingBottom: SIZES.padding * 2,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    ratingChart: {
        //flex: 1,
        flexDirection: 'column',
        //alignI:'flex-start'

    },
   


})