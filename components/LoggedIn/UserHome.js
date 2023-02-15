import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Header from './UserHeader';
import MainContainer from '../MainContainer';
import Nav from '../Home/Nav';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const UserHome = () => {
  const [search, onChangeSearch] = useState('');
  const [category, onChangeCategory] = useState('Category');
  const [availability, onChangeAvail] = useState('Availability');
  const [moreFilters, onChangeMore] = useState('More Filters');

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
      <MainContainer>
        <ImageBackground
          source={require('../../images/map.png')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.container2}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSearch}
              value={search}
              placeholder={'Search by location'}
              placeholderTextColor={'#666'}
            />

            <FontAwesomeIcon
              style={styles.search}
              icon="fa-solid fa-magnifying-glass"
            />
            <View style={styles.filter}>
              <TextInput
                style={[styles.input, styles.filterInput]}
                onChangeText={onChangeCategory}
                value={category}
                editable={false}
                selectTextOnFocus={false}
              />

              <TextInput
                style={[styles.input, styles.filterInput, styles.center]}
                onChangeText={onChangeAvail}
                value={availability}
                editable={false}
                selectTextOnFocus={false}
              />
              <TextInput
                style={[styles.input, styles.filterInput, styles.black]}
                onChangeText={onChangeMore}
                value={moreFilters}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
          </View>
        </ImageBackground>
      </MainContainer>
      <Nav />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 95 : 70,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  input: {
    marginTop: 20,
    paddingLeft: 40,
    paddingRight: 5,
    paddingVertical: 10,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
  },
  search: {
    position: 'absolute',
    left: 15,
    top: 5,
    marginLeft: 40,
    marginTop: 25,
  },
  filter: {
    flexDirection: 'row',
    width: '80%',
  },
  filterInput: {
    width: '30%',
    textAlign: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },
  center: {
    marginHorizontal: '4%',
  },
  black: {
    backgroundColor: '#555',
    color: '#fff',
  },
});

export default UserHome;
