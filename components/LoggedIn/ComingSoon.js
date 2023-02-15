import {Pressable, StyleSheet, Text, View} from 'react-native';
import MainContainer from '../MainContainer';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>COMING SOON</Text>

      <Text style={styles.h2}>&#8211; Something new &#8211;</Text>

      <Pressable
        android_ripple={{color: '#ccc', borderless: true}}
        style={[styles.button, styles.buttonBlack]}>
        <View style={styles.navIcon}>
          <Text style={styles.navText}>SAVE THE DATE</Text>
        </View>
      </Pressable>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e5e5e',
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    marginBottom: 20,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  h2: {
    marginVertical: 10,
    color: '#ccc',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
  },
  navText: {
    color: '#fff',
  },
});

export default ComingSoon;
