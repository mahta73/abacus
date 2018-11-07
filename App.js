import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// custume components
import OurMoto from './front-end/ourMoto/ourMoto';
import Year from './front-end/year/year';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <OurMoto />
        <Year />
      </View>
    );
  }
}

/*
style={styles.container}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
