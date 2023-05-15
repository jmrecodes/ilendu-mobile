import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import Header from '../UserHeader';
import Nav from '../Nav';
import commonStyles from '../Product/commonStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ShowContext from '../../ShowContext';

const MessageDetail = () => {
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

  const showInbox = () => {
    setShow('inbox');
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
          onPress={showInbox}
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
        <View style={[styles.profileHeader, commonStyles.flexRow]}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require('../../../images/circle-white.png')}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
              style={[commonStyles.border, styles.image]}
            />
          </View>
          <View>
            <Text style={[commonStyles.h2, commonStyles.bold]}>
              Profile name
            </Text>
            <Text>Secondary line of text</Text>
          </View>
        </View>

        <View style={styles.main}>
          <View style={[styles.messageContainer, commonStyles.flexRow]}>
            <View style={styles.imageSmallContainer}>
              <ImageBackground
                source={require('../../../images/circle-white.png')}
                resizeMode="cover"
                imageStyle={styles.imageSmallStyle}
                style={[commonStyles.border, styles.imageSmall]}
              />
            </View>
            <View style={styles.messageSender}>
              <Text>
                Message text in here in this style to look like you have lots of
                friends!
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.messageContainer,
              commonStyles.flexRow,
              commonStyles.flexEnd,
            ]}>
            <View style={styles.messageReceiver}>
              <Text>
                But you do have lots of friends! You're one really awesome human!
              </Text>
            </View>
            <View style={styles.imageSmallContainer}>
              <ImageBackground
                source={require('../../../images/circle-white.png')}
                resizeMode="cover"
                imageStyle={styles.imageSmallStyle}
                style={[commonStyles.border, styles.imageSmall]}
              />
            </View>
          </View>

          <View style={[styles.messageContainer, commonStyles.flexRow]}>
            <View style={styles.imageSmallContainer}>
              <ImageBackground
                source={require('../../../images/circle-white.png')}
                resizeMode="cover"
                imageStyle={styles.imageSmallStyle}
                style={[commonStyles.border, styles.imageSmall]}
              />
            </View>
            <View style={styles.messageSender}>
              <Text>
                Ah, thanks! You're pretty great too!
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.messageContainer,
              commonStyles.flexRow,
              commonStyles.flexEnd,
            ]}>
            <View style={styles.messageReceiver}>
              <Text>
                These messages look rad!
              </Text>
            </View>
            <View style={styles.imageSmallContainer}>
              <ImageBackground
                source={require('../../../images/circle-white.png')}
                resizeMode="cover"
                imageStyle={styles.imageSmallStyle}
                style={[commonStyles.border, styles.imageSmall]}
              />
            </View>
          </View>

          <View style={[styles.messageContainer, commonStyles.flexRow]}>
            <View style={styles.messageSending}>
              <Text>
                <FontAwesomeIcon size={10} style={styles.icons} icon="fa-regular fa-circle" />
                <FontAwesomeIcon size={10} style={styles.icons} icon="fa-regular fa-circle" />
                <FontAwesomeIcon size={10} style={styles.icons} icon="fa-solid fa-circle" />
              </Text>
            </View>
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
  profileHeader: {
    paddingVertical: 10,
    paddingLeft: '15%',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  imageContainer: {
    minWidth: 50,
    width: '20%',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginLeft: 7,
  },
  main: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  imageSmallContainer: {
    minWidth: 20,
    width: '10%',
    alignItems: 'center',
  },
  imageSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  imageSmallStyle: {
    width: 15,
    height: 15,
  },
  messageContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  messageSender: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '60%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: '#ccc',
  },
  messageReceiver: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '60%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
    backgroundColor: '#eee',
  },
  messageSending: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: '#ccc',
  },
  icons: {
    marginRight: 5,
  },
});

export default MessageDetail;
