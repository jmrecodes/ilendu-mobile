import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CheckBox from '@react-native-community/checkbox';
import ShowContext from '../ShowContext';

const SuolBody = () => {
  const {setShow} = useContext(ShowContext);

  const showSignUp = () => {
    const timeout = setTimeout(() => {
      setShow('signUp');
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <View style={styles.body}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(0, 0, 0, .5)' : '#000',
          },
          styles.button,
          styles.country,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.country}>
          <Image
            source={require('../../images/circle-white.png')}
            style={styles.circle}
          />
          <Text style={styles.countryText}>Chile</Text>
          <Image
            source={require('../../images/sort-down-white.png')}
            style={styles.down}
          />
        </View>
      </Pressable>

      <View style={styles.ilenduContainer}>
        <Image source={require('../../images/ilendu-horizonal-logo.png')} />

        <Image
          source={require('../../images/lender.png')}
          style={styles.ilenduBg}
        />
      </View>

      <Pressable
        onPress={showSignUp}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(255, 255, 255, .9)' : '#fff',
          },
          styles.button,
          styles.buttonWhite,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.buttonTextContainer}>
          <FontAwesomeIcon style={styles.icon} size={30} icon="fa-brands fa-apple" />
          <Text style={[styles.buttonText, styles.buttonWhiteText]}>
            Continue with Apple
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={showSignUp}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(255, 255, 255, .9)' : '#fff',
          },
          styles.button,
          styles.buttonWhite,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.buttonTextContainer}>
          <FontAwesomeIcon style={styles.icon} size={30} icon="fa-brands fa-google" />
          <Text style={[styles.buttonText, styles.buttonWhiteText]}>
            Continue with Google
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={showSignUp}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(255, 255, 255, .9)' : '#fff',
          },
          styles.button,
          styles.buttonWhite,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.buttonTextContainer}>
          <FontAwesomeIcon style={styles.icon} size={30} icon="fa-brands fa-facebook" />
          <Text style={[styles.buttonText, styles.buttonWhiteText]}>
            Continue with Facebook
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={showSignUp}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(0, 0, 0, .5)' : '#000',
          },
          styles.button,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <Text style={[styles.buttonText, styles.signUp]}>Email sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 35,
  },
  country: {
    width: 250,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 35,
  },
  circle: {
    width: 40,
    height: 40,
  },
  down: {
    width: 15,
    height: 15,
    marginTop: 15,
  },
  countryText: {
    paddingLeft: 5,
    lineHeight: 40,
    fontSize: 16,
    color: '#fefefe',
  },
  ilenduContainer: {
    alignItems: 'center',
  },
  ilenduBg: {
    width: '80%',
    height: 250,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#333',
    marginTop: -125,
    zIndex: -1,
    marginBottom: 10,
  },
  button: {
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonWhite: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 5,
  },
  buttonTextContainer: {
    width: 180,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#eee',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonWhiteText: {
    color: '#333',
    paddingLeft: 5,
  },
  signUp: {
    fontWeight: '800',
  },
});

export default SuolBody;
