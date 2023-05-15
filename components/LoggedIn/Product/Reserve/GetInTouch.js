import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView, Pressable, TextInput,
} from 'react-native';
import commonStyles from '../commonStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const GetInTouch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lineBelow}>
        <Text style={[commonStyles.alignCenter, commonStyles.bold]}>GET IN TOUCH WITH THE LENDER</Text>
      </View>

      <View style={styles.main}>
        <Text style={[styles.textMain, commonStyles.bold, commonStyles.alignCenter]}>Choose a quick question for the lender</Text>
        <Text style={commonStyles.alignCenter}>
          Hello &nbsp;
          <FontAwesomeIcon color="#FBCF14" icon="fa-solid fa-hands" />
          ...
        </Text>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
            },
            styles.question,
          ]}>
          <Text style={commonStyles.alignCenter}>I would like to chat with you about this item.</Text>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
            },
            styles.question,
          ]}>
          <Text style={commonStyles.alignCenter}>Can you give more info on this item?</Text>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
            },
            styles.question,
          ]}>
          <Text style={commonStyles.alignCenter}>Are you open to discuss pick up location?</Text>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(200, 200, 200, .1)' : 'transparent',
            },
            styles.question,
            styles.selected
          ]}>
          <Text style={commonStyles.alignCenter}>Is it possible to pick up this item right now?</Text>
        </Pressable>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(66, 38, 241, .8)' : '#4226F1',
            },
            styles.btnMain
          ]}>
          <Text style={[commonStyles.alignCenter, commonStyles.white]}>SEND MESSAGE</Text>
        </Pressable>

        <Text style={styles.or}>OR</Text>

        <Text style={[styles.textMain, commonStyles.bold, commonStyles.alignCenter]}>Write your own message</Text>

        <TextInput style={styles.input} multiline={true} placeholder="Enter your own message"></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    paddingTop: 20,
  },
  lineBelow: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E1E1E1',
    marginBottom: 20,
  },
  main: {
    marginTop: 15,
  },
  textMain: {
    color: '#4226F1',
  },
  question: {
    paddingVertical: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(200, 200, 200)',
    marginHorizontal: 40,
    marginVertical: 5,
  },
  selected: {
    backgroundColor: 'rgba(66, 38, 241, .1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: 'rgba(66, 38, 241, .7)',
  },
  or: {
    marginVertical: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: 'rgb(33, 33, 33)',
    marginBottom: 50,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 100,
  },
  btnMain: {
    paddingVertical: 15,
    marginHorizontal: 40,
    marginTop: 20,
    borderRadius: 30,
  },
});

export default GetInTouch;
