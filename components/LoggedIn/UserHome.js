import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated, Image,
  ImageBackground,
  Platform, Pressable,
  StyleSheet, Text,
  TextInput,
  View,
} from 'react-native';
import Header from './UserHeader';
import MainContainer from '../MainContainer';
import Nav from './Nav';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from './Product/commonStyles';
import LinearGradient from 'react-native-linear-gradient';
import YourinContext from '../YourinContext';

const UserHome = () => {
  const [search, onChangeSearch] = useState('');
  const [category, onChangeCategory] = useState('Category');
  const [availability, onChangeAvail] = useState('Availability');
  const [moreFilters, onChangeMore] = useState('More Filters');

  const {yourin, setYourin} = useContext(YourinContext);

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

  const hideYourin = () => {
    setYourin('hide');
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

        <Nav />
      </MainContainer>

      <View style={[styles.dark, yourin === '0' ? null : styles.hide]} />

      {yourin === '0' ? (
        <View style={styles.yourin}>
          <ImageBackground
            source={require('../../images/yourinBg4.png')}
            resizeMode="cover"
            imageStyle={styles.yourinBg}>
            <Image
              source={require('../../images/start-1.png')}
              style={styles.yourinImg}
              resizeMode={'contain'}
            />
            <View style={styles.yourinDesc}>
              <Text style={[commonStyles.h1, commonStyles.bold, commonStyles.alignCenter]}>You are in.</Text>
              <Text style={[commonStyles.alignCenter]}>We are happy to have you here. Check out your profile to complete your information and explore your options.</Text>

              <Pressable
                onPress={hideYourin}
                android_ripple={{color: '#ccc', borderless: false}}
                style={({pressed}) => [
                  styles.yourinBtn,
                  {
                    paddingTop: pressed ? 2 : 0,
                    marginBottom: pressed ? 13 : 15,
                  },
                ]}>
                <LinearGradient
                  colors={['#DD8593', '#C96FD8']}
                  style={[styles.yourinBtn, styles.gradient]}
                  useAngle={true}
                  angle={-15}
                  angleCenter={{x: 0.5, y: 0}}>
                  <Text style={[styles.yourinText]}>OK</Text>
                </LinearGradient>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      ) : null}
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
  dark: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    zIndex: 90,
  },
  hide: {
    display: 'none',
  },
  yourin: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: '90%',
    zIndex: 100,
  },
  yourinBg: {
    borderRadius: 25,
  },
  yourinImg: {
    width: '90%',
    height: 300,
    marginLeft: '5%',
  },
  yourinDesc: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 25,
  },
  yourinBtn: {
    borderRadius: 20,
    marginTop: 10,
  },
  yourinText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gradient: {
    paddingVertical: 10,
  }
});

export default UserHome;



