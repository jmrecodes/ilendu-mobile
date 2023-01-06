import {StyleSheet, ScrollView, View, Animated} from 'react-native';
import SuHeader from '../SignUp/SuHeader';
import SuolBody from './SuolBody';
import React, {useContext, useEffect, useRef} from 'react';
import ShowContext from '../ShowContext';

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

  const showHome = () => {
    const timeout = setTimeout(() => {
      setShow('home');
    }, 500);

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
      <ScrollView>
        <SuHeader handleClick={showHome} />
        <SuolBody />
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242, 242, 242)',
    flex: 1,
  },
});

export default SignUpOrLogin;
