import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

// custome components

export default function YearButton(props) {

    return (
        <View
            style = {[styles.bottonContainer, {backgroundColor: props.color}]}
            onClick={() => {
                alert(`Welcome ${props.title}`);
            }}
        >
            <TouchableOpacity 
                style = {styles.botton}
                onPress={() => {
                    alert(`Welcome ${props.title}`);
                }}
            >
            <Text
                style = {styles.fancyText}
            >
                {props.title}
            </Text>
            </TouchableOpacity>
        </View>
    )
}

// {props.color}

const styles = StyleSheet.create({
    bottonContainer: {
        flex: 1,
        borderRadius: 10,
        margin: 2,
    },
    botton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fancyText: {
        color: 'white',
        fontSize: 30,
    }
});