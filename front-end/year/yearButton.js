import React from 'react';
import {StyleSheet, Button} from 'react-native';

// custome components

export default function YearButton(props) {
    return (
        <Button 
            style = {styles.botton}
            onPress={() => {
                alert(`Welcome ${props.title}`);
            }}
            title = {props.title}
        />
    )
}

const styles = StyleSheet.create({
    botton: {
        margin: 25,
    }
});