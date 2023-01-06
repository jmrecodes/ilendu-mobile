import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Button, Pressable} from 'react-native';

const GetStarted = () => {
  return (
    <View style={styles.welcome}>
      <ImageBackground
        source={require('../../images/borrower.png')}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.imageText}>
          <Text style={styles.welcomeTitle}>
            Join us helping {'\n'}
            the environment
          </Text>
          <Text style={styles.welcomeSub}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur earum nesciunt officia quo. Quas?
          </Text>
          <View style={styles.buttonView}>
            <Pressable
              style={styles.button}
              android_ripple={{color: '#ccc', borderless: false}}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    width: '100%',
    height: 320,
    backgroundColor: 'lightgray',
    paddingVertical: 20,
  },
  imageStyle: {
    marginTop: -20,
    height: 320,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  imageText: {
    flexWrap: 'wrap',
  },
  welcomeTitle: {
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 20,
  },
  welcomeSub: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 30,
    paddingLeft: 100,
    paddingRight: 100,
    color: '#fefefe',
  },
  buttonView: {
    paddingTop: 10,
    paddingLeft: 100,
    paddingRight: 100,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default GetStarted;
