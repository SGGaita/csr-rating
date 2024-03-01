import React, { useState, useEffect } from 'react';
import {BackHandler, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { FONTS, SIZES } from '../constants';
import { RadioButton } from 'react-native-paper';
import { rateFields } from '../utils/rateFormFields';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { setScore } from '../redux/rateSlice';


export const RateFormComponent = () => {
  const [formFields, setFormFields] = useState(rateFields);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [exitApp, setExitApp] = useState(false);

  const backActionHandler = () => {
    if (exitApp) {
      BackHandler.exitApp(); // Exit the app on second back press
    } else {
      setExitApp(true); // Set flag true for second back press
      setTimeout(() => setExitApp(false), 2000); // Reset flag after 2 seconds
    }
    return true; // Consume the back press event
  };

  useEffect(() => {
    const backHandlerSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backActionHandler
    );

    return () => backHandlerSubscription.remove();
  }, []);
  

  useEffect(() => {
    setIsSubmitting(false)
  }, [])

  const handleChange = (field, value) => {
    const updatedFormFields = formFields.map((formField) => {
      if (formField.label === field) {
        return {
          ...formField,
          value,
        };
      } else {
        return formField;
      }
    });

    setFormFields(updatedFormFields);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Check for empty fields
    let hasEmptyField = false;
    formFields.forEach((field) => {
      if (!field.value) {
        hasEmptyField = true;
        alert(`Please enter a value for ${field.label}`);
        setIsSubmitting(false);
      }
    });

    // Validate email address
    if (!hasEmptyField) {
      const emailField = formFields.find((field) => field.label === 'Email');
      const emailValue = emailField.value;

      if (!emailValue || !/.+@.+/.test(emailValue)) {
        alert('Invalid Email format. Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }
    } else {
      //setIsSubmitting(false);
      return;
    }


   // console.log('Form submitted:', formFields);
    const filteredFormFields = formFields.filter((field) => field.hasOwnProperty('id'));
   // console.log(filteredFormFields)
    //# Create a list of values for Q1-Q20
    const answerValues = filteredFormFields.map((field) => Number(field.value));
   // console.log(answerValues)
   // console.log('length', answerValues.length)

    // Calculate the sum of the values
    const sumOfValues = answerValues.reduce((sum, value) => {
      if (typeof value === "string") {
        value = Number(value);
      }
      return sum + value;
    }, 0);

    // Calculate the average of the values
    const average = sumOfValues / answerValues.length;

    // Print the average
   // console.log("Average of values:", average);

    const roundUpToDecimal = (number, decimalPlaces = 1) => {
      const factor = Math.pow(10, decimalPlaces);
      return Math.ceil(number * factor) / factor;
    }

    console.log('rounded up', roundUpToDecimal(average, 1))
    const roundedUpScore = roundUpToDecimal(average, 1)
    dispatch(setScore(roundedUpScore))

    // Extract Q1 to Q20 values
   const q1Value = formFields.find((field) => field.id === 'Q1').value;
   const q2Value = formFields.find((field) => field.id === 'Q2').value;
   const q3Value = formFields.find((field) => field.id === 'Q3').value;
   const q4Value = formFields.find((field) => field.id === 'Q4').value;
   const q5Value = formFields.find((field) => field.id === 'Q5').value;
   const q6Value = formFields.find((field) => field.id === 'Q6').value;
   const q7Value = formFields.find((field) => field.id === 'Q7').value;
   const q8Value = formFields.find((field) => field.id === 'Q8').value;
   const q9Value = formFields.find((field) => field.id === 'Q9').value;
   const q10Value = formFields.find((field) => field.id === 'Q10').value;
   const q11Value = formFields.find((field) => field.id === 'Q11').value;
   const q12Value = formFields.find((field) => field.id === 'Q12').value;
   const q13Value = formFields.find((field) => field.id === 'Q13').value;
   const q14Value = formFields.find((field) => field.id === 'Q14').value;
   const q15Value = formFields.find((field) => field.id === 'Q15').value;
   const q16Value = formFields.find((field) => field.id === 'Q16').value;
   const q17Value = formFields.find((field) => field.id === 'Q17').value;
   const q18Value = formFields.find((field) => field.id === 'Q18').value;
   const q19Value = formFields.find((field) => field.id === 'Q19').value;
   const q20Value = formFields.find((field) => field.id === 'Q20').value;

    // Create the data array to send to the backend
  const data = {
    comname: formFields.find((field) => field.ids === '1').value,
    yourfunction: formFields.find((field) => field.ids === '2').value,
    secofact: formFields.find((field) => field.ids === '3').value,
    country: formFields.find((field) => field.ids === '4').value,
    Company_size: formFields.find((field) => field.ids === '5').value,
    email: formFields.find((field) => field.ids === '6').value,
    score: roundedUpScore,
    q1: q1Value,
    q2: q2Value,
    q3: q3Value,
    q4: q4Value,
    q5: q5Value,
    q6: q6Value,
    q7: q7Value,
    q8: q8Value,
    q9: q9Value,
    q10: q10Value,
    q11: q11Value,
    q12: q12Value,
    q13: q13Value,
    q14: q14Value,
    q15: q15Value,
    q16: q16Value,
    q17: q17Value,
    q18: q18Value,
    q19: q19Value,
    q20: q20Value,
  };

  console.log('data', data)
   

    
    // Clear form fields before navigating to score screen
    setFormFields(formFields.map((field) => ({ ...field, value: '' })));

    handleSubmissionComplete(data);

  };

  const handleSubmissionComplete = (data) => {
    setIsSubmitting(true);

    //submit form fields to database
     fetch('https://csrfi.com/submit_data_csr.php', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
      },
       body: JSON.stringify(data),
     })
     .then((response) => {
      if (response.ok) {
        // Successful response
        console.log('Data sent successfully!');
        // Display success message to user (e.g., using Toast or Alert)
       // Alert.alert('Success!', 'Your data has been submitted successfully.');
        // You can also navigate to the score screen here if desired
        setIsSubmitting(false);
        navigation.navigate('Score');
      } else {
        // Handle error response
        console.error('Error:', response.status);
        response.text().then((text) => console.error(text));
        // Display error message to user (e.g., using Toast or Alert)
        //Alert.alert('Error', 'An error occurred while submitting data. Please try again later.');
      }
    })
    .catch((error) => {
      console.error('Error sending data:', error);
      // Display error message to user (e.g., using Toast or Alert)
      //Alert.alert('Error', 'An error occurred while submitting data. Please try again later.');
    });


    
  }


  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{ paddingBottom: SIZES.padding * 2 }}>
          <Text style={{ ...FONTS.body1, fontWeight: '100', lineHeight: 25, paddingBottom: SIZES.padding * 0.5 }}>
            Applies to organizations in public, private and NGO sectors.
          </Text>
          <Text style={{ ...FONTS.body1, fontWeight: '100', lineHeight: 25, paddingBottom: SIZES.padding * 0.5 }}>
            Just tick a box on the following twenty questions and a result will be given to you
            instantly … it only takes a few minutes to fill in.
          </Text>
          <Text style={{ ...FONTS.body1, fontWeight: '100', lineHeight: 25, paddingBottom: SIZES.padding * 0.5 }}>
            Here you will find a subset of questions that MHCi/CSRFi/IRL have developed to assist
            organizations in their quest to become more socially responsible and sustainable.
          </Text>
          <Text style={{ ...FONTS.body1, fontWeight: '100', lineHeight: 25, paddingBottom: SIZES.padding * 0.5 }}>
            So, twenty questions to see if you have a socially responsible organization…please fill in all
            the questions.
          </Text>
        </View>

        {/* Beginning of form */}
        <View style={styles.formContainer}>
          {formFields.map((field, index) => {
            switch (field.type) {
              case 'text':
                return (
                  <View style={styles.inputContainer} key={index}>
                    <Text style={{ paddingBottom: 5, ...FONTS.h4, fontWeight: '700' }}>
                      {field.label}
                    </Text>
                    <TextInput
                      style={{
                        backgroundColor: '#d9d7d7',
                        borderRadius: 5,
                        color: '#000000',
                        paddingHorizontal: SIZES.padding,
                        paddingVertical: 10,
                      }}
                      placeholder={field.label}
                      placeholderTextColor='#424242'
                      value={field.value}
                      onChangeText={(value) => handleChange(field.label, value)}
                    />
                  </View>
                );

              case 'radio':
                return (
                  <View style={styles.inputContainer} key={index}>
                    <Text style={{ paddingBottom: 5, ...FONTS.h4, fontWeight: '700' }}>
                      {field.label}
                    </Text>
                    <RadioButton.Group onValueChange={(newValue) => handleChange(field.label, newValue)} value={field.value}>
                      {field.options.map((option) => (
                        <View key={option.value} style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <RadioButton value={option.value} />
                          <Text>{option.label}</Text>
                        </View>
                      ))}
                    </RadioButton.Group>
                  </View>
                );

              default:
                return null;
            }
          })}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ ...styles.submitButton, opacity: isSubmitting ? 0.5 : 1 }}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={{ color: 'white', ...FONTS.h3 }}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'white',
    flex: 1,
    padding: SIZES.padding,
    //marginBottom:SIZES.padding * 3
  },
  formContainer: {
    paddingBottom: SIZES.padding * 2
  },
  inputContainer: {
    paddingVertical: 5
  },

  buttonContainer: {

  },

  submitButton: {
    backgroundColor: '#1c53b3',
    marginHorizontal: SIZES.padding * 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.padding * 2,
    marginBottom: 30,
    borderRadius: 5,
    elevation: 2,

  }
})