import React, {useContext} from 'react';
import {Platform, View, StyleSheet, Image, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../ShowContext';

const UserHeader = () => {
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

  return (
    <View style={styles.header}>
      <FontAwesomeIcon icon="fa-solid fa-bars" />
      <Image
        source={require('../../images/ilendu-black-logo.png')}
        style={styles.img}
        resizeMode="stretch"
      />
      <View style={styles.nav}>
        <Pressable
          onPress={showDashboard}
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'white',
            },
          ]}>
          <FontAwesomeIcon icon="fa-solid fa-shop" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 250, 250)',
  },
  text: {
    color: 'gray',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default UserHeader;
