import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function OurMoto() {
    return (
        <View>
        <View
            style = {styles.container}
        >
            <View>
                <Image     
                    source = {require('./imgs/abacusBanner.png')}
                />
            </View>
            <View>
                <Text>
                    Freedom when you want it,
                </Text>
                <Text>
                    structure where you choose it.
                </Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
})