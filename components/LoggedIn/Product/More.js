import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../UserHeader';
import Nav from '../Nav';
import FavoriteTabs from '../Inbox/InboxTabs';
import Image from './Favorite/Image';
import Detail from './Detail';
import Description from './Description';
import Location from './Location';
import BorrowPeriod from './BorrowPeriod';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from './commonStyles';
import ShowContext from '../../ShowContext';

const More = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {setShow} = useContext(ShowContext);

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

  const showHome = () => {
    setShow('home2');
  };

  const showSettings = () => {
    setShow('settings');
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
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <View style={[styles.profile]}>
          <View style={[styles.circle, commonStyles.center]}>
            <FontAwesomeIcon
              style={{marginTop: -5}}
              size={40}
              icon="fa-solid fa-user"
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={commonStyles.h2}>Hola Camila!</Text>
            <Text style={styles.viewProfile}>View and edit profile</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(60, 35, 220, .8)' : '#3C23DC',
              },
              styles.goPremium,
              commonStyles.beautifulBox,
            ]}>
            <Text
              style={[
                commonStyles.alignCenter,
                commonStyles.h2,
                commonStyles.bold,
                commonStyles.light,
              ]}>
              Go Premium
            </Text>
          </Pressable>

          <Pressable
            onPress={showSettings}
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
              },
              styles.button,
              commonStyles.beautifulBox,
            ]}>
            <View style={styles.circle2}></View>
            <Text
              style={[
                commonStyles.h2,
              ]}>
              Account settings
            </Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
              },
              styles.button,
              commonStyles.beautifulBox,
            ]}>
            <View style={styles.circle2}></View>
            <Text
              style={[
                commonStyles.h2,
              ]}>
              Wish list
            </Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
              },
              styles.button,
              commonStyles.beautifulBox,
            ]}>
            <View style={styles.circle2}></View>
            <Text
              style={[
                commonStyles.h2,
              ]}>
              My items
            </Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
              },
              styles.button,
              commonStyles.beautifulBox,
            ]}>
            <View style={styles.circle2}></View>
            <Text
              style={[
                commonStyles.h2,
              ]}>
              Borrowed Items
            </Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
              },
              styles.button,
              commonStyles.beautifulBox,
            ]}>
            <View style={styles.circle2}></View>
            <Text
              style={[
                commonStyles.h2,
              ]}>
              Contact support
            </Text>
          </Pressable>
        </View>

        <View style={styles.logoutCon}>
          <Pressable
            onPress={showHome}
            android_ripple={{color: '#ccc', borderless: true}}>
            <Text style={[commonStyles.h3, commonStyles.underline]}>Logout</Text>
          </Pressable>
          <Text style={styles.version}>Version 05.08.23</Text>
        </View>
      </ScrollView>

      <Nav />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 75 : 70,
  },
  scrollContent: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  profile: {
    paddingVertical: 20,
    paddingLeft: 30,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: '#eee',
    marginHorizontal: 10,
  },
  profileDesc: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  viewProfile: {
    color: '#715af6',
    marginTop: 5,
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderRadius: 35,
  },
  buttons: {
    paddingHorizontal: 50,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  goPremium: {
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    paddingLeft: 30,
    alignItems: 'center',
  },
  circle2: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
    marginRight: 10,
  },
  logoutCon: {
    paddingVertical: 20,
    paddingLeft: 30,
  },
  version: {
    marginTop: 10,
    fontSize: 12,
  },
});

export default More;
