import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

//Import Constants
import { currencies } from './constants';

//Import Components
import CurrencyButton from './components/CurrencyButton';

import Snackbar from 'react-native-snackbar'

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  //Click on converter button
  const buttonPressed = (targetValue: Currency) => {
    if(!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        textColor: '#EA7773',
        backgroundColor: '#000000'
      })
    }

    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`

      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }
    else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        textColor: '#F4BE2C',
        backgroundColor: '#000000'
      })
    }
  }
  
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.euroContainer}>
            <Text style={styles.euro}>€</Text>
            <TextInput 
              maxLength={16}
              value={inputValue}
              clearButtonMode='always' // only for iOS
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount in euro'
              style={styles.inputAmountField}
            />
          </View>
          {resultValue !== '' && (
              <Text style={styles.resultTxt}>{resultValue}</Text>
            )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
            numColumns={3}
            data={currencies}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable 
                style={[styles.button, targetCurrency === item.name && styles.selected]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242B2E',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#CAD5E2',
    fontWeight: '800',
  },
  euro: {
    marginRight: 8,
    fontSize: 22,
    color: '#CAD5E2',
    fontWeight: '800',
  },
  euroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    color: '#0D0D0D',
    fontSize: 16
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
