import {
  StyleSheet,
  ScrollView,
  View,
  Animated,
  ImageBackground,
  Dimensions,
  Text,
  Platform,
  Image,
  Pressable,
} from 'react-native';
import SuHeader from '../SignUp/SuHeader';
import SuolBody from './SuolBody';
import React, {useContext, useEffect, useRef, useState} from 'react';
import ShowContext from '../ShowContext';
import commonStyles from '../LoggedIn/Product/commonStyles';

const SignUpOrLogin = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  let fadeIn: function;
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  });

  const {setShow} = useContext(ShowContext);
  const [menu, setMenu] = useState(0);
  const [country, setCountry] = useState('Chile');

  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;

  let slideIn: function;
  slideIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 400,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  let slideOut: function;
  slideOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 450,
      useNativeDriver: true,
    }).start();
  };

  const showMenu = (changeCountry = null) => {
    if (changeCountry != null) {
      setCountry(changeCountry);
    }

    if (menu === 0) {
      slideIn();
      setMenu(1);
    } else {
      slideOut();
      setMenu(0);
    }
  };

  const showHome = () => {
    const timeout = setTimeout(() => {
      setShow('home2');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          // Bind opacity to animated value
          opacity: fadeAnim,
        },
      ]}>
      <View style={[styles.dark, menu ? styles.show : null]} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <ImageBackground
          source={require('../../images/bg-register.png')}
          resizeMode="cover"
          style={styles.image}>
          <SuolBody countrySelected={country} handleClick={() => showMenu(null)} />
        </ImageBackground>
      </ScrollView>

      <Animated.View
        style={[
          styles.country,
          {transform: [{translateY: slideAnim}, {perspective: 1000}]},
        ]}>
        <View style={styles.selectCon}>
          <Text style={styles.select}>Select your country</Text>
        </View>

        <View style={[styles.countriesCon, commonStyles.flexRow]}>
          <View style={styles.countries}>
            <Pressable
              onPress={() => showMenu('Chile')}
              android_ripple={{color: '#ccc', borderless: false}}
              style={({pressed}) => [
                [styles.button, styles.buttonContainer],
                {
                  paddingTop: pressed ? 2 : 0,
                  marginBottom: pressed ? -2 : 0,
                },
              ]}>
              <Image
                source={require('../../images/circle-chile.png')}
                style={styles.circle}
              />
            </Pressable>
            <Text style={styles.countryText}>Chile</Text>
          </View>

          <View style={styles.countries}>
            <Pressable
              onPress={() => showMenu('US')}
              android_ripple={{color: '#ccc', borderless: false}}
              style={({pressed}) => [
                [styles.button, styles.buttonContainer],
                {
                  paddingTop: pressed ? 2 : 0,
                  marginBottom: pressed ? -2 : 0,
                },
              ]}>
              <Image
                source={require('../../images/circle-us.png')}
                style={styles.circle}
              />
            </Pressable>
            <Text style={styles.countryText}>United States</Text>
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242, 242, 242)',
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  dark: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    zIndex: 90,
    display: 'none',
  },
  show: {
    display: 'flex',
  },
  country: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#fff',
    zIndex: 100,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  selectCon: {
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingBottom: 10,
  },
  select: {
    fontSize: 18,
    fontWeight: '500',
  },
  circle: {
    marginTop: 20,
    marginBottom: 5,
    width: 50,
    height: 50,
  },
  countriesCon: {
    marginHorizontal: 50,
    justifyContent: 'space-evenly',
  },
  countries: {
    alignItems: 'center',
  },
});

export default SignUpOrLogin;
