import React, {useContext, useEffect, useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView, Text, Platform, Pressable,
} from 'react-native';
import Header from './UserHeader';
import Nav from '../Home/Nav';
import ShowContext from '../ShowContext';

const FeaturedItemMore = () => {
  const {show, setShow} = useContext(ShowContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showProductDetail = () => {
    const timeout = setTimeout(() => {
      setShow('product');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

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

      <Text style={styles.h1}>Find what you're looking for</Text>

      <Text style={styles.h2}>&#8211; Featured items &#8211;</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.container2}>
          <View style={styles.row}>
            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
            </View>

            <View style={styles.area}>
              <Pressable
                onPress={showProductDetail}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
                  },
                  styles.product,
                ]}>
                <ImageBackground
                  source={require('../../images/image-regular.png')}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                  style={styles.image}></ImageBackground>
              </Pressable>
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
    backgroundColor: 'rgb(242, 242, 242)',
  },
  container2: {
    paddingTop: 20,
    alignItems: 'center',
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 75 : 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 20,
  },
  popularAreaContainer: {
    flexDirection: 'row',
    paddingRight: 90,
  },
  popularArea: {
    paddingBottom: 40,
    paddingLeft: 40,
    marginRight: -30,
    marginBottom: 1,
  },
  area: {
    width: 90,
    height: 120,
    backgroundColor: '#dfdfdf',
  },
  product: {
    width: 90,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  h2: {
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default FeaturedItemMore;
