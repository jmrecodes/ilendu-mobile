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
import Header from '../UserHeader';
import Nav from '../../Home/Nav';
import Tabs from './Tabs';
import Image from './Image';
import Detail from './Detail';
import Description from './Description';
import Location from './Location';
import BorrowPeriod from './BorrowPeriod';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Reviews from './Reviews';
import ReviewsHeader from './ReviewsHeader';
import commonStyles from './commonStyles';
import ReviewDetail from './ReviewDetail';

const ProductDetail = () => {
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

  const showOverview = () => {
    setShowTab('overview');
  };

  const showReviews = () => {
    setShowTab('reviews');
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
        <Tabs
          showTab={showTab}
          showOverview={showOverview}
          showReviews={showReviews}
        />

        {showTab === 'overview' ? (
          <>
            <Image />

            <Detail />

            <Description />

            <Location />

            <BorrowPeriod />
          </>
        ) : showTab === 'reviews' ? (
          <View style={commonStyles.paddingHorizontal}>
            <Reviews />

            <ReviewsHeader />

            <ReviewDetail />

            <ReviewDetail />

            <ReviewDetail />
          </View>
        ) : null}
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

export default ProductDetail;
