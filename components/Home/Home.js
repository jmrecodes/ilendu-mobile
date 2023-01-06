import {useEffect, useRef} from 'react';
import {Animated, Platform, ScrollView, StyleSheet} from 'react-native';
import Header from './Header';
import MainContainer from '../MainContainer';
import Welcome from './Welcome';
import Feature from './Feature';
import GetStarted from './GetStarted';
import PopularArea from './PopularArea';
import Nav from './Nav';

const Home = ({showScreen}) => {
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
        <MainContainer>
          <Welcome />
          <Feature />
          <GetStarted />
          <PopularArea />
        </MainContainer>
      </ScrollView>
      <Nav />
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
  signup: {
    flex: 1,
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 95 : 70,
  },
});

export default Home;
