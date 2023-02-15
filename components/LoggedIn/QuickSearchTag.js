import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView, Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const QuickSearchTag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 1</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={[styles.button, styles.center]}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 2222</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 33</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 4444</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={[styles.button, styles.center]}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 5</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 6</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 7</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={[styles.button, styles.center]}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 8</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Tag 999</Text>
          </View>
        </Pressable>
      </View>

      <Pressable
        android_ripple={{color: '#ccc', borderless: true}}
        style={[styles.button, styles.buttonBlack]}>
        <View style={styles.navIcon}>
          <Text style={[styles.navText, styles.navTextWhite]}>GO</Text>
          <FontAwesomeIcon
            style={[styles.icon, styles.navTextWhite]}
            icon="fa-solid fa-chevron-right"
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    paddingTop: 20,
    marginBottom: 30,
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
  row: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  navIcon: {
    position: 'relative',
  },
  button: {
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
  },
  buttonBlack: {
    alignSelf: 'center',
    backgroundColor: '#000',
    width: 100,
    paddingVertical: 10,
    marginTop: 10,
  },
  navTextWhite: {
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
});

export default QuickSearchTag;
