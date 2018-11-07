import React from 'react';
import { StyleSheet, View}  from 'react-native';

// custom components
import YearButton from './yearButton';

export default function Year(props) {
    return (
        <View> 
            <YearButton 
                title = 'Year 1'
            />
            <YearButton 
                title = 'Year 2'
            />
            <YearButton 
                title = 'Year 3'
            />
            <YearButton 
                title = 'Year 4'
            />
            <YearButton 
                title = 'Year 5'
            />
            <YearButton 
                title = 'Year 6'
            />
            <YearButton 
                title = 'Year 7'
            />
            <YearButton 
                title = 'Year 8'
            />
        </View>
    )
}