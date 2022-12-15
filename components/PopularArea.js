import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const PopularArea = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse by popular area</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.popularAreaContainer}
        style={styles.popularArea}>
        <View style={styles.area}>
          <ImageBackground
            source={require('../images/image-regular.png')}
            resizeMode="center"
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../images/image-regular.png')}
            resizeMode="center"
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../images/image-regular.png')}
            resizeMode="center"
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../images/image-regular.png')}
            resizeMode="center"
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../images/image-regular.png')}
            resizeMode="center"
            style={styles.image}></ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 20,
  },
  popularAreaContainer: {
    flexDirection: 'row',
    paddingRight: 90,
  },
  popularArea: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 40,
    marginRight: -30,
    marginBottom: -1,
  },
  area: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#dedede',
    marginRight: 20,
  },
  image: {
    width: 50,
    height: 50,
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25,
  },
});

export default PopularArea;
