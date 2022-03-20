import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../Hooks/useResults'
import ResultsList from '../Components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text> 
            <ResultsList title="Cost Effective"/>
            <ResultsList title="Bit Pricier"/>
            <ResultsList title="Big Spender"/>
        </View>
    )
}

const styles = StyleSheet.create({})


export default SearchScreen