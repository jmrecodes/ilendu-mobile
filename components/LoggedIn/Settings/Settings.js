import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated, ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet, Switch,
  Text,
  View,
} from 'react-native';
import Header from '../UserHeader';
import Nav from '../Nav';
import commonStyles from '../Product/commonStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../../ShowContext';

const AccountSettings = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {setShow} = useContext(ShowContext);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  let fadeIn: function;
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  });

  const showMore = () => {
    setShow('more');
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          // Bind opacity to animated value
          opacity: fadeAnim,
        },
      ]}>
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <Pressable
          onPress={showMore}
          android_ripple={{color: '#ccc', borderless: false}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
            },
            styles.header,
          ]}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          <Text style={styles.text}>Go back</Text>
        </Pressable>
        <View style={styles.main}>
          <View style={styles.set}>
            <View
              style={[
                styles.lineBottom,
                commonStyles.flexRow,
                commonStyles.flexBetween,
              ]}>
              <View>
                <Text style={[commonStyles.h2, commonStyles.bold]}>
                  Setting title
                </Text>
                <Text>Secondary line of text</Text>
              </View>
              <View style={styles.switch}>
                <Switch
                  trackColor={{false: '#D7D7D7', true: '#4226F1'}}
                  thumbColor={isEnabled1 ? '#FFF' : '#8A8A8A'}
                  ios_backgroundColor="#D7D7D7"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
              </View>
            </View>
          </View>
          <View style={styles.set}>
            <View
              style={[
                styles.lineBottom,
                commonStyles.flexRow,
                commonStyles.flexBetween,
              ]}>
              <View>
                <Text style={[commonStyles.h2, commonStyles.bold]}>
                  Setting title
                </Text>
                <Text>Secondary line of text</Text>
              </View>
              <View style={styles.switch}>
                <Switch
                  trackColor={{false: '#D7D7D7', true: '#4226F1'}}
                  thumbColor={isEnabled2 ? '#FFF' : '#8A8A8A'}
                  ios_backgroundColor="#D7D7D7"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
              </View>
            </View>
          </View>
          <View style={styles.set}>
            <View
              style={[
                styles.lineBottom,
                commonStyles.flexRow,
                commonStyles.flexBetween,
              ]}>
              <View>
                <Text style={[commonStyles.h2, commonStyles.bold]}>
                  Setting title
                </Text>
                <Text>Secondary line of text</Text>
              </View>
              <View style={styles.switch}>
                <Switch
                  trackColor={{false: '#D7D7D7', true: '#4226F1'}}
                  thumbColor={isEnabled3 ? '#FFF' : '#8A8A8A'}
                  ios_backgroundColor="#D7D7D7"
                  onValueChange={toggleSwitch3}
                  value={isEnabled3}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttons}>
            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
                },
                styles.button,
                commonStyles.beautifulBox,
              ]}>
              <View style={styles.circle2}></View>
              <Text
                style={[
                  commonStyles.h3,
                ]}>
                Extensive setting name
              </Text>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
                },
                styles.button,
                commonStyles.beautifulBox,
              ]}>
              <View style={styles.circle2}></View>
              <Text
                style={[
                  commonStyles.h3,
                ]}>
                Extensive setting name
              </Text>
            </Pressable>

            <Pressable
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgba(250, 250, 250, 1)' : '#fff',
                },
                styles.button,
                commonStyles.beautifulBox,
              ]}>
              <View style={styles.circle2}></View>
              <Text
                style={[
                  commonStyles.h3,
                ]}>
                Extensive setting name
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <Nav />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 75 : 70,
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
  },
  text: {
    fontWeight: '300',
    marginTop: -2.5,
    marginLeft: 15,
  },
  main: {
    marginTop: 20,
  },
  set: {
    paddingHorizontal: 30,
  },
  lineBottom: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E1E1E1',
  },
  switch: {
    justifyContent: 'center',
  },
  buttons: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    paddingLeft: 50,
    alignItems: 'center',
  },
  circle2: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
    marginRight: 10,
  },
});

export default AccountSettings;
