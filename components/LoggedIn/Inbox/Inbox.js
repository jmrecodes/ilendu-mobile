import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../UserHeader';
import Nav from '../Nav';
import FavoriteTabs from './InboxTabs';
import Image from '../Product/Favorite/Image';
import Detail from '../Product/Detail';
import Description from '../Product/Description';
import Location from '../Product/Location';
import BorrowPeriod from '../Product/BorrowPeriod';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from '../Product/commonStyles';
import Notification from './Notification';
import Message from './Message';
import ShowContext from '../../ShowContext';

const Inbox = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {setShow} = useContext(ShowContext);
  const [showTab, setShowTab] = useState('messages');

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

  const showOverview = () => {
    setShowTab('messages');
  };

  const showReviews = () => {
    setShowTab('notifications');
  };

  const showMessageDetail = () => {
    setShow('message');
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
        <View style={styles.wishList}>
          <Text
            style={[
              commonStyles.h2,
              commonStyles.alignCenter,
              commonStyles.paddingVertical,
            ]}>
            Inbox
          </Text>
        </View>
        <FavoriteTabs
          showTab={showTab}
          showOverview={showOverview}
          showReviews={showReviews}
        />

        {showTab === 'messages' ? (
          <View style={styles.container}>
            {/*<Text style={[commonStyles.h2]}>No messages</Text>*/}
            {/*<View style={styles.circle}></View>*/}
            <Pressable
              onPress={showMessageDetail}
              android_ripple={{color: '#ccc', borderless: false}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(200, 200, 200, .1)'
                    : 'transparent',
                },
                styles.header,
              ]}>
              <Message />
            </Pressable>
            <Message read={true} />
          </View>
        ) : showTab === 'notifications' ? (
          <View style={styles.container}>
            <View style={styles.activity}>
              <Text style={[commonStyles.alignCenter, commonStyles.h3]}>
                ACTIVITY
              </Text>
            </View>

            <Notification />
          </View>
        ) : null}
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
  wishList: {
    borderTopWidth: 5,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  button: {
    width: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
    paddingVertical: 5,
    borderRadius: 15,
  },
  pressed: {
    backgroundColor: '#eee',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
    marginTop: 10,
  },
  activity: {
    borderTopColor: '#E1E1E1',
    borderTopWidth: 1,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,
    borderTopStyle: 'solid',
    paddingVertical: 5,
    marginTop: 20,
  },
});

export default Inbox;
