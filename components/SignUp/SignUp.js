import {
  StyleSheet,
  ScrollView,
  View,
  Animated,
  ImageBackground,
} from 'react-native';
import SuHeader from './SuHeader';
import SuBody from './SuBody';
import React, {useContext, useEffect, useRef} from 'react';
import ShowContext from '../ShowContext';
import LoginBody from './LoginBody';
import YourinContext from '../YourinContext';

const SignUp = ({hide = false}) => {
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

  const {setYourin} = useContext(YourinContext);
  const {show, setShow} = useContext(ShowContext);

  const showHome = () => {
    const timeout = setTimeout(() => {
      setShow('signUpOrLogin');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showDashboard = () => {
    const timeout = setTimeout(() => {
      setYourin('0');
      setShow('loggedIn');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showDashboard2 = () => {
    const timeout = setTimeout(() => {
      setYourin('hide');
      setShow('loggedIn');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showSignupOrLogin = () => {
    const timeout = setTimeout(() => {
      setShow('signUpOrLoginNew');
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
      <ImageBackground
        source={require('../../images/fondo.png')}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView>
          {hide === false ? (
            <SuHeader started={true} login={show !== 'login' ? false : true} handleClick={showHome} />
          ) : (
            <SuHeader started={true} login={show !== 'login' ? false : true} handleClick={showSignupOrLogin} />
          )}
          {show !== 'login' ? (
            <SuBody handleClick={showDashboard} />
          ) : (
            <LoginBody handleClick={showDashboard2} />
          )}
        </ScrollView>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  image: {
    flex: 1,
  },
});

export default SignUp;
