import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import ShowContext from '../ShowContext';

const Nav = () => {
  const {setShow} = useContext(ShowContext);

  const showSignUpOrLogin = () => {
    const timeout = setTimeout(() => {
      setShow('signUpOrLogin');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <View style={styles.nav}>
      <Pressable
        onPress={showSignUpOrLogin}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <Text style={styles.navText}>Search</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={showSignUpOrLogin}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-heart" />
          <Text style={styles.navText}>Favorite</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={showSignUpOrLogin}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
          <Text style={styles.navText}>Lend</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={showSignUpOrLogin}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-comments" />
          <Text style={styles.navText}>Inbox</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={showSignUpOrLogin}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-braille" />
          <Text style={styles.navText}>More</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'rgb(250, 250, 250)',
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 2,
    borderTopWidth: 3,
    borderTopColor: '#c3c3c3',
  },
  navIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  press: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  navText: {
    fontWeight: '300',
  },
});

export default Nav;
