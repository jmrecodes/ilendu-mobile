import {
  StyleSheet,
  ScrollView,
  View,
  Animated,
  ImageBackground,
} from 'react-native';
import SuHeader from '../SignUp/SuHeader';
import SuolBody from './SuolBody';
import React, {useContext, useEffect, useRef} from 'react';
import ShowContext from '../ShowContext';

const SignUpOrLogin = ({hide = false}) => {
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
      <ScrollView contentContainerStyle={styles.scroll}>
        <ImageBackground
          source={require('../../images/bg-register.png')}
          resizeMode="cover"
          style={styles.image}>
          {hide === false && <SuHeader handleClick={showHome} /> }
          {hide === false ? (
            <SuolBody />
          ) : (
            <SuolBody hide={true} />
          )}
        </ImageBackground>
      </ScrollView>
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
});

export default SignUpOrLogin;
