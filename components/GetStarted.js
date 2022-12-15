import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Button} from 'react-native';

const GetStarted = () => {
  return (
    <View style={styles.welcome}>
      <ImageBackground
        source={require('../images/image-regular.png')}
        resizeMode="center"
        style={styles.image}>
        <View style={styles.imageText}>
          <Text style={styles.welcomeTitle}>
            Join us helping {'\n'}
            the environment
          </Text>
          <Text style={styles.welcomeSub}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur earum nesciunt officia quo. Quas?
          </Text>
          <View style={styles.buttonView}>
            <Button color="#333" style={styles.button} title="Get Started" />
          </View>
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
  },
  imageText: {
    flexWrap: 'wrap',
  },
  welcomeTitle: {
    fontWeight: '600',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
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
});

export default GetStarted;
