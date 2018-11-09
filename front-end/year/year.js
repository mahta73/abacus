import React from 'react';
import { StyleSheet, View}  from 'react-native';

// custom components
import YearButton from './yearButton';

export default function Year(props) {
    return (
        <View
            style = {styles.container}
        >   
            <View
                style = {styles.secondContainer}
            >
                <YearButton 
                    title = 'Year 1'
                    color = '#841584'
                />
                <YearButton 
                    title = 'Year 2'
                    color = '#0b911d'
                />
                <YearButton 
                    title = 'Year 3'
                    color = '#052860'
                />
                <YearButton 
                    title = 'Year 4'
                    color = '#910b66'
                />
            </View>
            <View
                style = {styles.secondContainer}
            >
                <YearButton 
                    title = 'Year 5'
                    color = '#cc830e'
                />
                <YearButton 
                    title = 'Year 6'
                    color = '#0970f7'
                />
                <YearButton 
                    title = 'Year 7'
                    color = '#2aff00'
                />
                <YearButton 
                    title = 'Year 8'
                    color = '#4800ff'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    }, 
    secondContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
})
