import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import ShowContext from '../ShowContext';
import commonStyles from './Product/commonStyles';

const Nav = () => {
  const {setShow} = useContext(ShowContext);

  const showSignUpOrLogin = () => {
    const timeout = setTimeout(() => {
      setShow('signUpOrLogin');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showSearch = () => {
    const timeout = setTimeout(() => {
      setShow('search');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showFavorite = () => {
    const timeout = setTimeout(() => {
      setShow('favorite');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showInbox = () => {
    const timeout = setTimeout(() => {
      setShow('inbox');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showMore = () => {
    const timeout = setTimeout(() => {
      setShow('more');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <View style={styles.nav}>
      <Pressable
        onPress={showSearch}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <Text style={styles.navText}>Search</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={showFavorite}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-heart" />
          <Text style={styles.navText}>Wish list</Text>
        </View>
      </Pressable>
      <Pressable
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
          <Text style={styles.navText}>Lend</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={showInbox}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <View style={styles.inboxNum}>
            <View style={styles.num}>
              <Text style={commonStyles.white}>1</Text>
            </View>
          </View>
          <FontAwesomeIcon style={styles.front} icon="fa-solid fa-comments" />
          <Text style={styles.navText}>Inbox</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={showMore}
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
          },
          styles.press,
        ]}>
        <View style={styles.navIcon}>
          <FontAwesomeIcon icon="fa-solid fa-braille" />
          <Text style={styles.navText}>More</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'rgb(250, 250, 250)',
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 2,
    borderTopWidth: 3,
    borderTopColor: '#c3c3c3',
    zIndex: 100,
  },
  navIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 60,
    height: 60,
    position: 'relative',
  },
  press: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  navText: {
    fontWeight: '300',
  },
  inboxNum: {
    position: 'absolute',
    top: 5,
    paddingLeft: 10,
  },
  num: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#4226F1',
  },
});

export default Nav;
