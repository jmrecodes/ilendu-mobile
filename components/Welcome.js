import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <ImageBackground
        source={require('../images/image-regular.png')}
        resizeMode="center"
        style={styles.image}>
        <View style={styles.imageText}>
          <Text style={styles.welcomeTitle}>
            Welcome {'\n'}
            to Ilendu
          </Text>
          <Text style={styles.welcomeSub}>
            Find everything you are looking for
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    width: '100%',
    height: 300,
    backgroundColor: 'lightgray',
    paddingTop: 50,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageText: {
    paddingLeft: 50,
  },
  welcomeTitle: {
    fontWeight: '600',
    fontSize: 30,
    width: '100%',
  },
  welcomeSub: {
    width: '100%',
  },
});

export default Welcome;
