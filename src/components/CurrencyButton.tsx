import React from 'react'
import type { PropsWithChildren } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type CurrecyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrecyButtonProps) : React.JSX.Element => {

    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonFlag}>{props.flag}</Text>
            <Text style={styles.buttonCountry}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    buttonFlag: {
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 4
    },
    buttonCountry: {
        fontSize: 14,
        color: '#2D3436'
    }
})

export default CurrencyButton