import React from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const SuHeader = ({handleClick, started}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable
        onPress={handleClick}
        android_ripple={{color: '#ccc', borderless: false}}
        style={styles.header}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        <Text style={styles.text}>Go back</Text>
      </Pressable>
      started && <Text style={styles.title}>Let's Get Started</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    paddingTop: 20,
  },
  text: {
    fontWeight: '300',
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
