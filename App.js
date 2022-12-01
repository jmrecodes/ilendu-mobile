import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/ilendu-white-logo.png')}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default App;
