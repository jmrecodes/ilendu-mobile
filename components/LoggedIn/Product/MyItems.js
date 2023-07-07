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
import Header from '../UserHeader';
import Nav from '../Nav';
import commonStyles from './commonStyles';
import ShowContext from '../../ShowContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Image from './Favorite/Image';

const MyItems = () => {
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

  const showMore = () => {
    setShow('more');
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
          <Pressable
            onPress={showMore}
            android_ripple={{color: '#ccc', borderless: false}}
            style={({pressed}) => [
              {
                backgroundColor: pressed
                  ? 'rgba(33, 33, 33, .1)'
                  : 'transparent',
              },
              styles.back]}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </Pressable>

          <View style={styles.itemCon}>
            <Text
              style={[
                commonStyles.h1,
                commonStyles.paddingVertical,
                commonStyles.paddingHorizontal,
              ]}>
              Your Items
            </Text>

            <View style={styles.imageCon}>
              <ImageBackground
                source={require('../../../images/item-1.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
                <View style={[styles.prodType, styles.giveaway]}>
                  <Text style={[styles.prodTypeText]}>Give Away</Text>
                </View>
              </ImageBackground>

              <ImageBackground
                source={require('../../../images/item-2.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
                <View style={[styles.prodType, styles.premium]}>
                  <Text style={[styles.prodTypeText]}>Premium</Text>
                </View>
              </ImageBackground>

              <ImageBackground
                source={require('../../../images/item-3.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
                <View style={[styles.prodType, styles.seeAll]}>
                  <Text style={[styles.prodTypeText, styles.seeAllText]}>See all</Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View style={styles.itemCon}>
            <Text
              style={[
                commonStyles.h1,
                commonStyles.paddingVertical,
                commonStyles.paddingHorizontal,
              ]}>
              Your Lent Items
            </Text>

            <View style={styles.imageCon}>
              <ImageBackground
                source={require('../../../images/item-4.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
              </ImageBackground>

              <ImageBackground
                source={require('../../../images/item-5.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
                <View style={[styles.prodType, styles.premium]}>
                  <Text style={[styles.prodTypeText]}>Premium</Text>
                </View>
              </ImageBackground>

              <ImageBackground
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={[styles.image, {opacity: 0}]}>
              </ImageBackground>
            </View>
          </View>

          <View style={styles.itemCon}>
            <Text
              style={[
                commonStyles.h1,
                commonStyles.paddingVertical,
                commonStyles.paddingHorizontal,
              ]}>
              Your Requested Items
            </Text>

            <View style={styles.imageCon}>
              <ImageBackground
                source={require('../../../images/item-6.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
              </ImageBackground>

              <ImageBackground
                source={require('../../../images/item-7.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
                <View style={[styles.prodType, styles.premium]}>
                  <Text style={[styles.prodTypeText]}>Premium</Text>
                </View>
              </ImageBackground>

              <ImageBackground
                source={require('../../../images/item-8.png')}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={styles.image}>
                <View style={[styles.prodType, styles.seeAll]}>
                  <Text style={[styles.prodTypeText, styles.seeAllText]}>See all</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
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
  back: {
    padding: 10,
  },
  wishList: {
    borderTopWidth: 5,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  itemCon: {
    marginBottom: 20,
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
  imageCon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    height: 120,
    width: '30%',
  },
  imageStyle: {
    position: 'absolute',
    width: '100%',
    borderRadius: 25,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    borderWidth: 1,
  },
  seeAll: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: 40,
  },
  prodType: {
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  prodTypeText: {
    color: '#fff',
    textAlign: 'center',
    padding: 3,
  },
  seeAllText: {
    color: '#333',
  },
  giveaway: {
    backgroundColor: '#5D91D5',
  },
  premium: {
    backgroundColor: '#BD73D2',
  },
});

export default MyItems;
