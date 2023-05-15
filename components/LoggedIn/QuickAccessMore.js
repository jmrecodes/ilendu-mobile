import React, {useContext, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
  Animated,
  Platform,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Header from './UserHeader';
import Nav from './Nav';
import ShowContext from '../ShowContext';

const QuickAccessMore = () => {
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

      <ScrollView style={styles.scroll}>
        <View style={styles.container2}>
          <View style={styles.row}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Sports</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Clothes</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Tools</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Music</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Tech</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Home</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Beach</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>School</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Books</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Games</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Streaming</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Accessories</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Movies</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Garden</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Children</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Lorem.</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Lorem.</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Lorem.</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Lorem.</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Lorem.</Text>
              </View>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255, .8)'
                    : 'rgb(255, 255, 255)',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>Lorem.</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <Nav />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  container2: {
    paddingTop: 20,
    alignItems: 'center',
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 75 : 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 20,
  },
  popularAreaContainer: {
    flexDirection: 'row',
  },
  popularArea: {
    paddingBottom: 40,
    marginRight: -30,
    marginBottom: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    width: '100%',
  },
  navIcon: {
    position: 'relative',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    height: 80,
    width: 110,
    shadowColor: '#eee',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,

    elevation: 24,
  },
  buttonBlack: {
    alignSelf: 'center',
    backgroundColor: '#000',
    width: 100,
    paddingVertical: 10,
    marginTop: 10,
  },
  navText: {
    fontSize: 12,
  },
  navTextWhite: {
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
});

export default QuickAccessMore;
