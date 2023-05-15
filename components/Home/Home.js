import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, ImageBackground, Platform, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import MainContainer from '../MainContainer';
import Welcome from './Welcome';
import Feature from './Feature';
import GetStarted from './GetStarted';
import PopularArea from './PopularArea';
import Nav from './Nav';
import Page1 from './Page1';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../ShowContext';
import Page2 from './Page2';
import Page3 from './Page3';

const Home = ({start = false}) => {
  const [page, setPage] = useState('0');
  const {setShow} = useContext(ShowContext);
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

  const showPage2 = () => {
    setPage('1');
  };

  const showPage3 = () => {
    setPage('2');
  };

  const showPage4 = () => {
    setShow('signUpOrLoginNew');
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

      { start === false ? (
        <ImageBackground
          source={require('../../images/bg-home.png')}
          resizeMode="cover"
          style={styles.image}>
          <ScrollView contentContainerStyle={styles.scroll}>
            {page === '0' ? (
              <View style={styles.main}>
                <Page1 />

                <View style={styles.buttons}>
                  <Pressable
                    onPress={showPage2}
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed ? 'rgba(33, 33, 33, .8)' : '#333',
                      },
                      styles.button,
                    ]}
                    android_ripple={{color: '#ccc', borderless: false}}>
                    <Text style={styles.buttonText}>Continue</Text>
                  </Pressable>

                  <Pressable
                    onPress={showPage4}
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                      },
                      styles.buttonSkip
                    ]}
                    android_ripple={{color: '#ccc', borderless: false}}>
                    <Text style={styles.skip}>Skip</Text>
                  </Pressable>
                </View>
              </View>
            ) : page === '1' ? (
              <View style={styles.main}>
                <Page2 />

                <View style={styles.buttons}>
                  <Pressable
                    onPress={showPage3}
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed ? 'rgba(33, 33, 33, .8)' : '#333',
                      },
                      styles.button,
                    ]}
                    android_ripple={{color: '#ccc', borderless: false}}>
                    <Text style={styles.buttonText}>Continue</Text>
                  </Pressable>

                  <Pressable
                    onPress={showPage4}
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                      },
                      styles.buttonSkip
                    ]}
                    android_ripple={{color: '#ccc', borderless: false}}>
                    <Text style={styles.skip}>Skip</Text>
                  </Pressable>
                </View>
              </View>
            ) : page === '2' ? (
              <View style={styles.main}>
                <Page3 />

                <View style={styles.buttons}>
                  <Pressable
                    onPress={showPage4}
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed ? 'rgba(33, 33, 33, .8)' : '#333',
                      },
                      styles.button,
                    ]}
                    android_ripple={{color: '#ccc', borderless: false}}>
                    <Text style={styles.buttonText}>Continue</Text>
                  </Pressable>

                  <Pressable
                    onPress={showPage4}
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                      },
                      styles.buttonSkip
                    ]}
                    android_ripple={{color: '#ccc', borderless: false}}>
                    <Text style={styles.skip}>Skip</Text>
                  </Pressable>
                </View>
              </View>
            ) : null}
          </ScrollView>
        </ImageBackground>
      ) : (
        <>
          <ScrollView style={styles.scroll2}>
            <Header />
            <MainContainer>
              <Welcome />
              <Feature />
              <GetStarted />
              <PopularArea />
            </MainContainer>
          </ScrollView>
          <Nav />
        </>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  scroll: {
    flex: 1,
  },
  scroll2: {
    marginBottom: Platform.OS === 'ios' ? 65 : 70,
  },
  main: {
    flex: 1,
  },
  signup: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#eee',
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonSkip: {
    marginTop: 15,
    width: 50,
    alignSelf: 'center',
  },
  skip: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Home;
