import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../ShowContext';

const PopularCategories = () => {
  const {setShow} = useContext(ShowContext);

  const showFeaturedItems = () => {
    const timeout = setTimeout(() => {
      setShow('featuredItems');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={showFeaturedItems}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgba(78, 78, 78, .8)'
              : '#4e4e4e',
          },
          styles.press,
        ]}>
        <View style={styles.area}>
          <Text style={styles.h3}>Category name</Text>
          <Text style={styles.pWhite}>Lorem ipsum dolor sit amet.</Text>
          <FontAwesomeIcon style={styles.icon} icon="fa-solid fa-chevron-right" />
        </View>
      </Pressable>

      <Pressable
        onPress={showFeaturedItems}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgba(78, 78, 78, .8)'
              : '#4e4e4e',
          },
          styles.press,
        ]}>
        <View style={styles.area}>
          <Text style={styles.h3}>Category name</Text>
          <Text style={styles.pWhite}>Lorem ipsum dolor sit amet.</Text>
          <FontAwesomeIcon style={styles.icon} icon="fa-solid fa-chevron-right" />
        </View>
      </Pressable>

      <Pressable
        onPress={showFeaturedItems}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgba(78, 78, 78, .8)'
              : '#4e4e4e',
          },
          styles.press,
        ]}>
        <View style={styles.area}>
          <Text style={styles.h3}>Category name</Text>
          <Text style={styles.pWhite}>Lorem ipsum dolor sit amet.</Text>
          <FontAwesomeIcon style={styles.icon} icon="fa-solid fa-chevron-right" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  area: {
    width: '100%',
    height: 130,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 40,
    paddingBottom: 15,
    marginBottom: 15,
    position: 'relative',
  },
  h3: {
    color: '#eee',
    fontSize: 18,
  },
  pWhite: {
    color: '#ccc',
  },
  icon: {
    color: '#fff',
    right: 0,
    bottom: 30,
    marginRight: -25,
  },
  press: {
    width: '90%',
    marginBottom: 10,
  },
});

export default PopularCategories;
