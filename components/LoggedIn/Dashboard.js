import React, {useContext, useEffect, useRef} from 'react';
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './UserHeader';
import MainContainer from '../MainContainer';
import Nav from '../Home/Nav';
import NewArrival from './NewArrival';
import PopularCategories from './PopularCategories';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import FeaturedItem from './FeaturedItem';
import QuickSearchTag from './QuickSearchTag';
import ComingSoon from './ComingSoon';
import QuickAccess from './QuickAccess';
import ShowContext from '../ShowContext';

const Dashboard = () => {
  const {setShow} = useContext(ShowContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showFeaturedItems = () => {
    const timeout = setTimeout(() => {
      setShow('featuredItems');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const showQuickAcessMore = () => {
    const timeout = setTimeout(() => {
      setShow('categories');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

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
      <ScrollView style={styles.scroll}>
        <MainContainer>
          <View style={styles.container2}>
            <Text style={styles.h1}>Get them before anyone else</Text>

            <Text style={styles.h2}>&#8211; New arrivals &#8211;</Text>

            <NewArrival />

            <Text style={styles.h1}>Borrow them now</Text>

            <Text style={styles.h2}>&#8211; Recently Available &#8211;</Text>

            <NewArrival />

            <Text style={styles.h1}>Popular Categories</Text>

            <PopularCategories />

            <Pressable
              onPress={showQuickAcessMore}
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(240, 240, 240, .5)'
                    : '#fff',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>SEE ALL CATEGORIES</Text>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon="fa-solid fa-chevron-right"
                />
              </View>
            </Pressable>

            <Text style={styles.h1}>Find what you're looking for</Text>

            <Text style={styles.h2}>&#8211; Featured items &#8211;</Text>

            <FeaturedItem />

            <Pressable
              onPress={showFeaturedItems}
              android_ripple={{color: '#ccc', borderless: true}}
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(240, 240, 240, .5)'
                    : '#fff',
                },
                styles.button,
              ]}>
              <View style={styles.navIcon}>
                <Text style={styles.navText}>EXPLORE MORE</Text>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon="fa-solid fa-chevron-right"
                />
              </View>
            </Pressable>

            <Text style={styles.h1}>Need help deciding?</Text>

            <Text style={styles.h2}>&#8211; Quick search &#8211;</Text>

            <QuickSearchTag />

            <ComingSoon />

            <Text style={styles.h1}>We have great brands</Text>

            <Text style={styles.h2}>&#8211; Quick access &#8211;</Text>

            <QuickAccess />
          </View>
        </MainContainer>
      </ScrollView>
      <Nav />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  container2: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    borderTopWidth: 3,
    borderTopColor: '#f3f3f3',
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 75 : 70,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  h2: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
    paddingLeft: 40,
    paddingRight: 5,
    paddingVertical: 10,
    width: '60%',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
  },
  navIcon: {
    position: 'relative',
  },
  navText: {
    textAlign: 'center',
    paddingRight: 30,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});

export default Dashboard;
