import React, {useContext, useEffect, useRef, useState} from 'react';
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
import FavoriteTabs from './FavoriteTabs';
import Image from './Image';
import Detail from '../Detail';
import Description from '../Description';
import Location from '../Location';
import BorrowPeriod from '../BorrowPeriod';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from '../commonStyles';
import ShowContext from '../../../ShowContext';

const Favorite = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showTab, setShowTab] = useState('overview');
  const {setShow} = useContext(ShowContext);
  const [all, setAll] = useState(false);
  const [avail, setAvail] = useState(false);
  const [unavail, setUnAvail] = useState(false);

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

  const showProduct = () => {
    setShow('product');
  };

  const pressAll = () => {
    setAll(true);
    setAvail(false);
    setUnAvail(false);
  };

  const pressAvail = () => {
    setAll(false);
    setAvail(true);
    setUnAvail(false);
  };

  const pressUnavail = () => {
    setAll(false);
    setAvail(false);
    setUnAvail(true);
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
        <View style={styles.wishList}>
          <Text
            style={[
              commonStyles.h2,
              commonStyles.alignCenter,
              commonStyles.paddingVertical,
            ]}>
            Wish list
          </Text>
        </View>
        <FavoriteTabs
          showTab={showTab}
          showOverview={showOverview}
          showReviews={showReviews}
        />

        {showTab === 'overview' ? (
          <>
            <View style={styles.buttons}>
              <Pressable
                onPress={pressAll}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(200, 200, 200, .2)'
                      : 'transparent',
                  },
                  styles.button,
                  all ? styles.pressed : null,
                ]}>
                <Text style={commonStyles.alignCenter}>All items</Text>
              </Pressable>

              <Pressable
                onPress={pressAvail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(200, 200, 200, .2)'
                      : 'transparent',
                  },
                  styles.button,
                  avail ? styles.pressed : null,
                ]}>
                <Text style={commonStyles.alignCenter}>Available</Text>
              </Pressable>

              <Pressable
                onPress={pressUnavail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(200, 200, 200, .2)'
                      : 'transparent',
                  },
                  styles.button,
                  unavail ? styles.pressed : null,
                ]}>
                <Text style={commonStyles.alignCenter}>Unavailable</Text>
              </Pressable>
            </View>

            <View style={{paddingHorizontal: 20}}>
              <Pressable
                onPress={showProduct}
                android_ripple={{color: '#ccc', borderless: false}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(33, 33, 33, .5)'
                      : 'transparent',
                  },
                  styles.header]}>
                <Image />
              </Pressable>

              <Pressable
                onPress={showProduct}
                android_ripple={{color: '#ccc', borderless: false}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(33, 33, 33, .5)'
                      : 'transparent',
                  },
                  styles.header]}>
                <Image />
              </Pressable>

              <Pressable
                onPress={showProduct}
                android_ripple={{color: '#ccc', borderless: false}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(33, 33, 33, .5)'
                      : 'transparent',
                  },
                  styles.header]}>
                <Image />
              </Pressable>

              <Pressable
                onPress={showProduct}
                android_ripple={{color: '#ccc', borderless: false}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(33, 33, 33, .5)'
                      : 'transparent',
                  },
                  styles.header]}>
                <Image />
              </Pressable>
            </View>
          </>
        ) : showTab === 'reviews' ? (
          <></>
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
  wishList: {
    borderTopWidth: 5,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  button: {
    width: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
    paddingVertical: 5,
    borderRadius: 15,
  },
  pressed: {
    backgroundColor: '#ccc',
  },
  header: {
    marginBottom: 20,
  },
});

export default Favorite;
