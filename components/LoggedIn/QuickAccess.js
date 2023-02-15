import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView, Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const QuickAccess = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Apple</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={[styles.button, styles.center]}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Samsung</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Caterpillar</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Apple</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={[styles.button, styles.center]}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Samsung</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={styles.button}>
          <View style={styles.navIcon}>
            <Text style={styles.navText}>Caterpillar</Text>
          </View>
        </Pressable>
      </View>
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
  },
  popularArea: {
    paddingBottom: 40,
    marginRight: -30,
    marginBottom: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  navIcon: {
    position: 'relative',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    height: 70,
    width: 100,
    shadowColor: '#777',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,

    elevation: 24,
  },
  buttonBlack: {
    alignSelf: 'center',
    backgroundColor: '#000',
    width: 100,
    paddingVertical: 10,
    marginTop: 10,
  },
  navText: {
    fontSize: 12,
  },
  navTextWhite: {
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
});

export default QuickAccess;
