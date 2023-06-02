import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../ShowContext';
import LinearGradient from 'react-native-linear-gradient';

const SuolBody = ({countrySelected, handleClick}) => {
  const {setShow} = useContext(ShowContext);

  const showSignUp = () => {
    const timeout = setTimeout(() => {
      setShow('signUp');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showHome = () => {
    setShow('signUp');
  };

  return (
    <View style={styles.body}>
      <View style={styles.logoCon}>
        <Image
          style={styles.logo}
          source={require('../../images/ilendu-app-black-logo.png')}
        />
      </View>

      <Pressable
        onPress={handleClick}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(33, 33, 33)' : '#000',
          },
          styles.button,
          styles.country,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.country}>
          {countrySelected === 'Chile' ? (
            <>
              <Image
                source={require('../../images/circle-chile.png')}
                style={styles.circle}
              />
              <Text style={styles.countryText}>Chile</Text>
            </>
          ) : (
            <>
              <Image
                source={require('../../images/circle-us.png')}
                style={styles.circle}
              />
              <Text style={styles.countryText}>United States</Text>
            </>
          )}
          <Image
            source={require('../../images/sort-down-white.png')}
            style={styles.down}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={showSignUp}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, .7)',
          },
          styles.button,
          styles.buttonWhite,
          styles.buttonApple,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.buttonTextContainer}>
          <FontAwesomeIcon
            style={styles.icon}
            size={30}
            icon="fa-brands fa-apple"
            color={'#fff'}
          />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={showSignUp}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(255, 255, 255, .7)',
          },
          styles.button,
          styles.buttonWhite,
          styles.buttonGoogle,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.buttonTextContainer}>
          <FontAwesomeIcon
            style={styles.icon}
            size={30}
            icon="fa-brands fa-google"
          />
          <Text style={[styles.buttonText, styles.buttonWhiteText]}>
            Continue with Google
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={showSignUp}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgba(56, 103, 172, 1)'
              : 'rgba(56, 103, 172, .7)',
          },
          styles.button,
          styles.buttonWhite,
          styles.buttonFb,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.buttonTextContainer}>
          <FontAwesomeIcon
            style={styles.icon}
            size={30}
            icon="fa-brands fa-facebook"
            color={'#fff'}
          />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
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
          styles.buttonPhoneNumber,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={styles.buttonTextContainer}>
          <FontAwesomeIcon
            style={styles.icon}
            size={30}
            icon="fa-solid fa-phone"
            color={'#fff'}
          />
          <Text style={styles.buttonText}>Continue with phone number</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={showHome}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(0, 0, 0, .5)' : '#000',
          },
          styles.button,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <LinearGradient
          colors={['#DD8593', '#C96FD8']}
          style={[styles.buttonLg]}
          useAngle={true}
          angle={-15}
          angleCenter={{x: 0.5, y: 0}}>
          <Text style={[styles.buttonText, styles.signUp]}>GET STARTED</Text>
        </LinearGradient>
      </Pressable>

      <Text style={styles.login}>Already have an account? Login.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 40,
  },
  logoCon: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoConStart: {
    marginTop: 30,
  },
  logo: {
    width: 165,
    height: 35,
  },
  country: {
    width: 200,
    alignSelf: 'center',
    paddingVertical: 2,
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
  buttonLg: {
    borderRadius: 25,
  },
  buttonWhite: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonApple: {
    marginTop: 200,
  },
  buttonGoogle: {},
  buttonFb: {},
  buttonPhoneNumber: {
    backgroundColor: 'rgba(95, 160, 110, .7)',
  },
  icon: {
    marginTop: 5,
  },
  buttonTextContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    color: '#eee',
    textAlign: 'center',
    paddingVertical: 15,
    paddingLeft: 5,
  },
  buttonWhiteText: {
    color: '#333',
  },
  signUp: {
    fontWeight: '800',
  },
  login: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
  },
});

export default SuolBody;
