import React, {useContext, useRef, useState} from 'react';
import {Platform, View, StyleSheet, Image, Pressable, Text, Animated, Dimensions, ImageBackground} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../ShowContext';

const UserHeader = () => {
  const {show, setShow} = useContext(ShowContext);
  const [menu, setMenu] = useState(0);

  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

  let slideIn: function;
  slideIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  let slideOut: function;
  slideOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').width,
      duration: 450,
      useNativeDriver: true,
    }).start();
  };

  const showDashboard = () => {
    const timeout = setTimeout(() => {
      if (show != 'dashboard') {
        setShow('dashboard');
      } else {
        setShow('loggedIn');
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showMenu = () => {
    if (menu === 0) {
      slideIn();
      setMenu(1);
    } else {
      slideOut();
      setMenu(0);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Pressable
          onPress={showMenu}
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
            },
          ]}>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </Pressable>
        <Image
          source={require('../../images/ilendu-black-logo.png')}
          style={styles.img}
          resizeMode="stretch"
        />
        <View style={styles.nav}>
          <Pressable
            onPress={showDashboard}
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
              },
            ]}>
            <FontAwesomeIcon icon="fa-solid fa-shop" />
          </Pressable>
        </View>
      </View>

      <Animated.View
        style={[
          styles.menu,
          {transform: [{translateX: slideAnim}, {perspective: 1000}]},
        ]}>
        <ImageBackground
          source={require('../../images/menuBg.png')}
          resizeMode="cover"
          style={styles.menuBg}>
          <View style={styles.sidemenu}>
            <Text style={[styles.premium, styles.light, styles.bold]}>Go Premium</Text>
            <View style={styles.line}></View>

            <Text style={styles.light}>Map</Text>
            <View style={styles.line}></View>

            <Text style={styles.light}>Item inventory</Text>
            <View style={styles.line}></View>

            <Text style={styles.light}>Settings</Text>
            <View style={styles.line}></View>

            <Text style={styles.light}>Inbox</Text>
            <View style={styles.line}></View>

            <Text style={styles.light}>Need help?</Text>

            <View style={styles.nav}>
              <Pressable
                onPress={showMenu}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(255, 255, 255, .8)'
                      : 'transparent',
                  },
                  {borderRadius: 15},
                ]}>
                <FontAwesomeIcon
                  style={styles.close}
                  size={30}
                  icon="fa-regular fa-circle-xmark"
                />
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  menu: {
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
  },
  menuBg: {
    width: '100%',
    height: '100%',
  },
  menuShow: {
    display: 'flex',
  },
  sidemenu: {
    marginTop: 100,
    alignItems: 'center',
  },
  premium: {
    borderRadius: 25,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fefefe',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  light: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '200',
  },
  bold: {
    fontWeight: '400',
  },
  last: {
    border: 0,
  },
  line: {
    width: 60,
    borderBottomWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    marginBottom: 20,
  },
  close: {
    color: '#fff',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 250, 250)',
  },
  text: {
    color: 'gray',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  img: {
    width: 292 / 2,
    height: 63 / 2,
  },
});

export default UserHeader;
