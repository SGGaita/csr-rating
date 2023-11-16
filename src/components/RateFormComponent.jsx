import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FONTS, SIZES } from '../constants';
import { RadioButton } from 'react-native-paper';
import { rateFields } from '../utils/rateFormFields';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { setScore } from '../redux/rateSlice';

export const RateFormComponent = () => {
  const [formFields, setFormFields] = useState(rateFields);

  const dispatch = useDispatch()
  const navigation = useNavigation()

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
    // Check for empty fields
    let hasEmptyField = false;
    formFields.forEach((field) => {
      if (!field.value) {
        hasEmptyField = true;
        alert(`Please enter a value for ${field.label}`);
      }
    });

    // Validate email address
    if (!hasEmptyField) {
      const emailField = formFields.find((field) => field.label === 'Email');
      const emailValue = emailField.value;

      if (!emailValue || !/.+@.+/.test(emailValue)) {
        alert('Invalid Email format. Please enter a valid email address');
        return;
      }
    } else {
      return;
    }
    // console.log('Form submitted:', formFields);
    const filteredFormFields = formFields.filter((field) => field.hasOwnProperty('id'));
    //console.log(filteredFormFields)
    //# Create a list of values for Q1-Q20
    const answerValues = filteredFormFields.map((field) => Number(field.value));
    console.log(answerValues)
    console.log('length', answerValues.length)

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
    console.log("Average of values:", average);

    const roundUpToDecimal = (number, decimalPlaces = 1) => {
      const factor = Math.pow(10, decimalPlaces);
      return Math.ceil(number * factor) / factor;
    }

    console.log('rounded up', roundUpToDecimal(average, 1))
    const roundedUpScore = roundUpToDecimal(average, 1)
    dispatch(setScore(roundedUpScore))
    navigation.navigate('Score')





  };


  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{ paddingBottom: SIZES.padding * 2 }}>
          <Text style={{ ...FONTS.body1, fontWeight: '100', lineHeight: 25, paddingBottom: SIZES.padding * 0.5 }}>
            Self-assess how socially responsible has been the Leadership of YOUR organization
            and/or YOUR ESG.
          </Text>
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
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={{ color: 'white', ...FONTS.h3 }}>Submit</Text>
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