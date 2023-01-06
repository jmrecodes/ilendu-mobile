import {StyleSheet, ScrollView, View, Animated} from 'react-native';
import SuHeader from './SuHeader';
import SuBody from './SuBody';
import React, {useContext, useEffect, useRef} from 'react';
import ShowContext from '../ShowContext';

const SignUp = () => {
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

  const showHome = () => {
    const timeout = setTimeout(() => {
      setShow('signUpOrLogin');
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <Animated.View
      style={[
        {
          // Bind opacity to animated value
          opacity: fadeAnim,
        },
      ]}>
      <ScrollView>
        <SuHeader started={true} handleClick={showHome}/>
        <SuBody handleClick={showHome}/>
      </ScrollView>
    </Animated.View>
  );
};

export default SignUp;
