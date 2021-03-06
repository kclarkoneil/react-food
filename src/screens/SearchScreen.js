import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../Hooks/useResults'
import ResultsList from '../Components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })         
    }
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text> 
            <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective"
            />
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier" 
                />
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender" 
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})


export default SearchScreen