import React from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        Learn more about exchange safety during COVID-19
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 15,
    paddingBottom: 15,
  },
  text: {
    color: 'gray',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Header;
