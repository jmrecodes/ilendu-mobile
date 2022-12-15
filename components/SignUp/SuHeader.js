import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const test = () => {
  alert('ok');
}

const SuHeader = ({handleClick}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable
        onPress={handleClick}
        android_ripple={{color: '#ccc', borderless: false}}
        style={styles.header}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        <Text style={styles.text}>Go back</Text>
      </Pressable>
      <Text style={styles.title}>Let's Get Started</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
  },
  text: {
    fontWeight: '350',
    marginTop: -2.5,
    marginLeft: 15,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '500',
    color: '#333',
  },
});

export default SuHeader;
