import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import {faComments} from '@fortawesome/free-solid-svg-icons/faComments';
import {faBraille} from '@fortawesome/free-solid-svg-icons/faBraille';
import {faCircleNodes} from '@fortawesome/free-solid-svg-icons/faCircleNodes';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faApple} from '@fortawesome/free-brands-svg-icons/faApple';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShop} from '@fortawesome/free-solid-svg-icons/faShop';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

import {library} from '@fortawesome/fontawesome-svg-core';

library.add(
  fab,
  faSearch,
  faHeart,
  faPlusCircle,
  faComments,
  faBraille,
  faCircleNodes,
  faChevronLeft,
  faEnvelope,
  faUser,
  faLock,
  faCircle,
  faApple,
  faGoogle,
  faFacebook,
  faBars,
  faShop,
  faMagnifyingGlass,
  faChevronRight,
);

import ShowContext from './components/ShowContext';
import Home from './components/Home/Home';
import SignUpOrLogin from './components/SignUpOrLogin/SignUpOrLogin';
import SignUp from './components/SignUp/SignUp';
import UserHome from './components/LoggedIn/UserHome';
import Dashboard from './components/LoggedIn/Dashboard';

const App = () => {
  const [show, setShow] = useState('0');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow('1');
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setShow]);

  useEffect(() => {
    if (show < '2') {
      const timeout2 = setTimeout(() => {
        setShow('home');
      }, 1500);

      return () => {
        clearTimeout(timeout2);
      };
    }
  }, [setShow, show]);

  return (
    <ShowContext.Provider value={{show, setShow}}>
      {show === '0' ? (
        <View style={styles.container0}>
          <Image
            source={require('./images/ilendu-white-logo.png')}
            style={styles.img}
            resizeMode="stretch"
          />
        </View>
      ) : show === '1' ? (
        <View style={styles.container0}>
          <ActivityIndicator size="large" color="#ccc" />
        </View>
      ) : show === 'home' ? (
        <Home />
      ) : show === 'signUpOrLogin' ? (
        <SignUpOrLogin />
      ) : show === 'signUp' ? (
        <SignUp />
      ) : show === 'loggedIn' ? (
        <UserHome />
      ) : show === 'dashboard' ? (
        <Dashboard />
      ) : null}
    </ShowContext.Provider>
  );
};

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    marginBottom: Platform.OS === 'ios' ? 95 : 70,
  },
  img: {
    width: 237,
    height: 52.5,
  },
});

export default App;
