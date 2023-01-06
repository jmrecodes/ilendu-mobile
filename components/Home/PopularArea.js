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
        showsHorizontalScrollIndicator={false}
        style={styles.popularArea}>
        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/miami.jpg')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/Unknown.jpg')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/Unknown-2.jpg')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/Unknown-3.jpg')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.image}></ImageBackground>
        </View>

        <View style={styles.area}>
          <ImageBackground
            source={require('../../images/Unknown-4.jpg')}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
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
    paddingBottom: 40,
    paddingLeft: 40,
    marginRight: -30,
    marginBottom: 1,
  },
  area: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#dedede',
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
  },
  imageStyle: {
    borderRadius: 45,
    borderWidth: 7,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, .5)',
  },
});

export default PopularArea;
