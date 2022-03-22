import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
    if (!results.length) {
        return null
    }
    return <View>
        <Text style={styles.titleStyle}>{title} </Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data= {results}
            keyExtractor= {(result) => result.id}
            renderItem= {({item}) => {
                return (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Results', {id: item.id})}
                >
                <ResultsDetail result={item} />
                </TouchableOpacity>
                )
            }}
            />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    constainerStyle: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)