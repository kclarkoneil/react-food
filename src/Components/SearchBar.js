import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" size={30}/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder= "Search"
            value = {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 50,
        flexDirection: 'row'
    },
    inputStyle: {
        
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar