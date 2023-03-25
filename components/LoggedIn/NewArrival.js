import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView, Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../ShowContext';

const NewArrival = () => {
  const {show, setShow} = useContext(ShowContext);

  const showProductDetail = () => {
    const timeout = setTimeout(() => {
      setShow('product');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.popularAreaContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.popularArea}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    paddingTop: 20,
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
    height: 90,
    backgroundColor: '#dedede',
    marginRight: 20,
  },
  product: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default NewArrival;
