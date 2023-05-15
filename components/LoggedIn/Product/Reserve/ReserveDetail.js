import React, {useEffect, useRef, useState} from 'react';
import {
  Animated, ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../UserHeader';
import Nav from '../../Nav';
import Image from './Image';
import Description from '../Description';
import Location from '../Location';
import BorrowPeriod from '../BorrowPeriod';
import TimePreferred from './TimePreferred';
import GetInTouch from './GetInTouch';

const ReserveDetail = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showTab, setShowTab] = useState('overview');

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

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <Image />

        <TimePreferred />

        <GetInTouch />
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
});

export default ReserveDetail;
