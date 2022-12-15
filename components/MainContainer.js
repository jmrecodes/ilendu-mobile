import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainContainer = props => {
  return <View style={styles.mainContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainContainer;
