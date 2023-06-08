import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
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
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
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
