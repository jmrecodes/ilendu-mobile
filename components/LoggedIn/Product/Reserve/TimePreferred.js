import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView, Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../../../ShowContext';
import commonStyles from '../commonStyles';

const TimePreferred = () => {
  const {show, setShow} = useContext(ShowContext);

  const showProductDetail = () => {
    const timeout = setTimeout(() => {
      setShow('product');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.lineBelow}>
        <Text style={[commonStyles.alignCenter, commonStyles.bold]}>SELECT A PREFERRED TIME FOR PICK UP</Text>
      </View>

      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.popularAreaContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.popularArea}>
        <View style={styles.area}>
          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.product,
              styles.selected,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Tuesday</Text>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Oct 4</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.time,
              styles.selectedTime,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>9:00 am</Text>
          </Pressable>
        </View>

        <View style={styles.area}>
          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.product,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Wednesday</Text>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Oct 5</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.time,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>9:30 am</Text>
          </Pressable>
        </View>

        <View style={styles.area}>
          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.product,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Thursday</Text>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Oct 6</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.time,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>10:00 am</Text>
          </Pressable>
        </View>

        <View style={styles.area}>
          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.product,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Friday</Text>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Oct 7</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.time,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>10:30 am</Text>
          </Pressable>
        </View>

        <View style={styles.area}>
          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.product,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Saturday</Text>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Oct 8</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.time,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>11:00 am</Text>
          </Pressable>
        </View>

        <View style={styles.area}>
          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.product,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Sunday</Text>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>Oct 8</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#ccc', borderless: true}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
              },
              styles.time,
            ]}>
            <Text style={[commonStyles.bold, commonStyles.alignCenter]}>11:30 am</Text>
          </Pressable>
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
    paddingBottom: 40,
    paddingLeft: 40,
    marginRight: -30,
    marginBottom: 1,
  },
  area: {
    width: 90,
    height: 90,
    backgroundColor: 'rgb(250, 250, 250)',
    marginRight: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(200, 200, 200)',
    borderRadius: 5,
  },
  product: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  lineBelow: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E1E1E1',
    marginBottom: 20,
  },
  selected: {
    backgroundColor: 'rgba(66, 38, 241, .1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: 'rgba(66, 38, 241, .7)',
  },
  time: {
    marginTop: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(200, 200, 200)',
    borderRadius: 5,
  },
  selectedTime: {
    backgroundColor: 'rgba(66, 38, 241, .1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: 'rgba(66, 38, 241, .7)',
  },
});

export default TimePreferred;
