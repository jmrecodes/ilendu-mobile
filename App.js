import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Animated,
  ActivityIndicator,
  Text,
} from 'react-native';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import {faComments} from '@fortawesome/free-solid-svg-icons/faComments';
import {faBraille} from '@fortawesome/free-solid-svg-icons/faBraille';
import {faCircleNodes} from '@fortawesome/free-solid-svg-icons/faCircleNodes';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(
  fab,
  faSearch,
  faHeart,
  faPlusCircle,
  faComments,
  faBraille,
  faCircleNodes,
  faChevronLeft,
  faEnvelope,
);

import Nav from './components/Nav';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import GetStarted from './components/GetStarted';
import PopularArea from './components/PopularArea';
import SuHeader from './components/SignUp/SuHeader';
import SuBody from './components/SignUp/SuBody';

const App = () => {
  const [show, setShow] = useState(0);

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
    const timeout = setTimeout(() => {
      setShow(1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (show < 2) {
      const timeout2 = setTimeout(() => {
        setShow(2);
      }, 1500);

      return () => {
        clearTimeout(timeout2);
        fadeIn();
      };
    }
  }, [fadeIn, show]);

  const showLogin = () => {
    const timeout = setTimeout(() => {
      setShow(3);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showHome = () => {
    const timeout = setTimeout(() => {
      setShow(2);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  };

  return show === 0 ? (
    <View style={styles.container0}>
      <Image
        source={require('./images/ilendu-white-logo.png')}
        style={styles.img}
      />
    </View>
  ) : show === 1 ? (
    <View style={styles.container0}>
      <ActivityIndicator size="large" color="#ccc" />
    </View>
  ) : show === 2 ? (
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
        <MainContainer>
          <Welcome />
          <Feature />
          <GetStarted />
          <PopularArea />
        </MainContainer>
      </ScrollView>
      <Nav handleClick={showLogin} />
    </Animated.View>
  ) : (
    <View styles={styles.signup}>
      <ScrollView>
        <SuHeader handleClick={showHome} />
        <SuBody handleClick={showHome} />
      </ScrollView>
    </View>
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
  },
  signup: {
    flex: 1,
  },
  scroll: {
    marginBottom: 70,
  },
});

export default App;
