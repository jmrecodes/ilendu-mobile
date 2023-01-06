import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <ImageBackground
        source={require('../../images/bg.png')}
        resizeMode="cover"
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
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageText: {
    paddingLeft: 20,
    paddingBottom: 40,
  },
  welcomeTitle: {
    fontWeight: '600',
    fontSize: 30,
    width: '100%',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 20,
  },
  welcomeSub: {
    width: '100%',
    color: 'white',
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 5,
  },
});

export default Welcome;
