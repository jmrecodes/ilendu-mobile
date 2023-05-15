import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform, Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from './UserHeader';
import MainContainer from '../MainContainer';
import Nav from './Nav';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import PopularCategories from './PopularCategories';
import QuickAccess from './QuickAccess';
import SearchCategories from './SearchCategories';
import ShowContext from '../ShowContext';

const Search = () => {
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

  const {show, setShow} = useContext(ShowContext);

  const showDashboard = () => {
    const timeout = setTimeout(() => {
      if (show != 'dashboard') {
        setShow('dashboard');
      } else {
        setShow('loggedIn');
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    fadeIn();
  });

  return (
    <>
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
          <View
            style={[
              styles.container,
              {
                paddingHorizontal: 30,
              },
            ]}>
            <View style={styles.search}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeSearch}
                value={search}
                placeholder={'Search terms'}
                placeholderTextColor={'#666'}
              />

              <FontAwesomeIcon
                style={styles.searchIcon}
                icon="fa-solid fa-magnifying-glass"
              />

              <Pressable
                onPress={showDashboard}
                android_ripple={{color: '#ccc', borderless: true}}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgba(100, 100, 100, .1)' : 'white',
                  },
                  {
                    borderRadius: 20,
                  },
                ]}>
                <Text style={styles.cancel}>Cancel</Text>
              </Pressable>
            </View>

            <View style={{marginBottom: 10}}>
              <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                Recent Searches
              </Text>

              <View
                style={[
                  styles.recent,
                  {
                    borderTopWidth: 2,
                  },
                ]}>
                <Text>Lorem ipsum</Text>
                <FontAwesomeIcon
                  style={{color: '#555'}}
                  icon="fa-solid fa-arrow-turn-up"
                />
              </View>

              <View
                style={[
                  styles.recent,
                  {
                    borderTopWidth: 2,
                  },
                ]}>
                <Text>Lorem ipsum</Text>
                <FontAwesomeIcon
                  style={{color: '#555'}}
                  icon="fa-solid fa-arrow-turn-up"
                />
              </View>

              <View
                style={[
                  styles.recent,
                  {
                    borderTopWidth: 2,
                  },
                ]}>
                <Text>Lorem ipsum</Text>
                <FontAwesomeIcon
                  style={{color: '#555'}}
                  icon="fa-solid fa-arrow-turn-up"
                />
              </View>

              <View
                style={[
                  styles.recent,
                  {
                    borderTopWidth: 2,
                  },
                ]}>
                <Text>Lorem ipsum</Text>
                <FontAwesomeIcon
                  style={{color: '#555'}}
                  icon="fa-solid fa-arrow-turn-up"
                />
              </View>

              <View
                style={[
                  styles.recent,
                  {
                    borderTopWidth: 2,
                  },
                ]}>
                <Text>Lorem ipsum</Text>
                <FontAwesomeIcon
                  style={{color: '#555'}}
                  icon="fa-solid fa-arrow-turn-up"
                />
              </View>

              <View
                style={[
                  styles.recent,
                  {
                    borderTopWidth: 2,
                  },
                ]}>
                <Text>Lorem ipsum</Text>
                <FontAwesomeIcon
                  style={{color: '#555'}}
                  icon="fa-solid fa-arrow-turn-up"
                />
              </View>

              <View
                style={[
                  styles.recent,
                  {
                    borderTopWidth: 2,
                  },
                ]}>
                <Text>Lorem ipsum</Text>
                <FontAwesomeIcon
                  style={{color: '#555'}}
                  icon="fa-solid fa-arrow-turn-up"
                />
              </View>
            </View>

            <Text style={{fontWeight: 'bold'}}>Popular Categories</Text>
            <SearchCategories />
          </View>
        </MainContainer>
      </Animated.View>
      <Nav />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  search: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 95 : 70,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',

    paddingLeft: 30,
    paddingRight: 5,
    height: 30,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 8,
  },
  cancel: {
    marginTop: 5,
    marginLeft: 10,
    width: 55,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: '#eee',
    paddingVertical: 5,
  },
});

export default Search;
