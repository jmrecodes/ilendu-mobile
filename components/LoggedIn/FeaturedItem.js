import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const FeaturedItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/image-regular.png')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>
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
    paddingBottom: 40,
    paddingLeft: 40,
    marginRight: -30,
    marginBottom: 1,
  },
  area: {
    width: 90,
    height: 120,
    backgroundColor: '#dfdfdf',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default FeaturedItem;
