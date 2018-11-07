import React, {Fragment} from 'react';
import {
            StyleSheet, 
            Image, 
            Dimensions
        } from 'react-native';

export default function OurMoto() {
    return (
        <Fragment>
            <Image 
                style = {styles.banner}
                source = {require('./imgs/abacusBanner.png')}
            />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: Dimensions.get('window').width,
        marginBottom: 25
    }
});