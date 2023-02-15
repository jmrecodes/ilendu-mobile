import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const NewArrival = () => {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.h3}>Category name</Text>
        <Text style={styles.pWhite}>Lorem ipsum dolor sit amet.</Text>
        <FontAwesomeIcon style={styles.icon} icon="fa-solid fa-chevron-right" />
      </View>

      <View style={styles.area}>
        <Text style={styles.h3}>Category name</Text>
        <Text style={styles.pWhite}>Lorem ipsum dolor sit amet.</Text>
        <FontAwesomeIcon style={styles.icon} icon="fa-solid fa-chevron-right" />
      </View>

      <View style={styles.area}>
        <Text style={styles.h3}>Category name</Text>
        <Text style={styles.pWhite}>Lorem ipsum dolor sit amet.</Text>
        <FontAwesomeIcon style={styles.icon} icon="fa-solid fa-chevron-right" />
      </View>
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
    width: '90%',
    height: 130,
    backgroundColor: '#4e4e4e',
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
});

export default NewArrival;
