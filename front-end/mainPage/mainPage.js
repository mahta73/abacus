import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// custume components
import Year from '../year/year';

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Year/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});


