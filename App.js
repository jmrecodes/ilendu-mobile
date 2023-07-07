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
import {faHeart as faHeart2} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import {faComments} from '@fortawesome/free-solid-svg-icons/faComments';
import {faBraille} from '@fortawesome/free-solid-svg-icons/faBraille';
import {faCircleNodes} from '@fortawesome/free-solid-svg-icons/faCircleNodes';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faCircle as faCircle2} from '@fortawesome/free-regular-svg-icons/faCircle';
import {faApple} from '@fortawesome/free-brands-svg-icons/faApple';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShop} from '@fortawesome/free-solid-svg-icons/faShop';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons/faArrowUpFromBracket';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faDownload} from '@fortawesome/free-solid-svg-icons/faDownload';
import {faFilter} from '@fortawesome/free-solid-svg-icons/faFilter';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons/faCircleXmark';
import {faArrowTurnUp} from '@fortawesome/free-solid-svg-icons/faArrowTurnUp';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {faPen} from '@fortawesome/free-solid-svg-icons/faPen';
import {faHands} from '@fortawesome/free-solid-svg-icons/faHands';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(
  fab,
  faSearch,
  faHeart,
  faHeart2,
  faPlusCircle,
  faComments,
  faBraille,
  faCircleNodes,
  faChevronLeft,
  faEnvelope,
  faUser,
  faLock,
  faCircle,
  faCircle2,
  faApple,
  faGoogle,
  faFacebook,
  faBars,
  faShop,
  faMagnifyingGlass,
  faChevronRight,
  faChevronDown,
  faArrowUpFromBracket,
  faStar,
  faDownload,
  faFilter,
  faPhone,
  faCircleXmark,
  faArrowTurnUp,
  faXmark,
  faPen,
  faHands,
  faArrowLeft,
);

import ShowContext from './components/ShowContext';
import YourinContext from './components/YourinContext';
import UserContext from './components/UserContext';
import Home from './components/Home/Home';
import SignUpOrLogin from './components/SignUpOrLogin/SignUpOrLogin';
import SignUp from './components/SignUp/SignUp';
import UserHome from './components/LoggedIn/UserHome';
import Dashboard from './components/LoggedIn/Dashboard';
import ProductDetail from './components/LoggedIn/Product/ProductDetail';
import FeaturedItemMore from './components/LoggedIn/FeaturedItemMore';
import QuickAccessMore from './components/LoggedIn/QuickAccessMore';
import Search from './components/LoggedIn/Search';
import Favorite from './components/LoggedIn/Product/Favorite/Favorite';
import Inbox from './components/LoggedIn/Inbox/Inbox';
import More from './components/LoggedIn/Product/More';
import AccountSettings from './components/LoggedIn/Settings/Settings';
import MessageDetail from './components/LoggedIn/Inbox/MessageDetail';
import ReserveDetail from './components/LoggedIn/Product/Reserve/ReserveDetail';
import MyItems from './components/LoggedIn/Product/MyItems';

const App = () => {
  const [show, setShow] = useState('0');
  const [yourin, setYourin] = useState('0');
  const [firstName, setFirstName] = useState('User');

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
            source={require('./images/ilendu-app-white-logo.png')}
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
      ) : show === 'home2' ? (
        <Home start={true} />
      ) : show === 'signUpOrLoginNew' ? (
        <SignUpOrLogin hide={true} />
      ) : show === 'signUpOrLogin' ? (
        <SignUpOrLogin />
      ) : show === 'signUp' || show === 'login' ? (
        <YourinContext.Provider value={{yourin, setYourin}}>
          <UserContext.Provider value={{firstName, setFirstName}}>
            <SignUp />
          </UserContext.Provider>
        </YourinContext.Provider>
      ) : show === 'signUp2' ? (
        <UserContext.Provider value={{firstName, setFirstName}}>
          <SignUp hide={true} />
        </UserContext.Provider>
      ) : show === 'loggedIn' ? (
        <YourinContext.Provider value={{yourin, setYourin}}>
          <UserHome />
        </YourinContext.Provider>
      ) : show === 'dashboard' ? (
        <Dashboard />
      ) : show === 'product' ? (
        <ProductDetail />
      ) : show === 'featuredItems' ? (
        <FeaturedItemMore />
      ) : show === 'categories' ? (
        <QuickAccessMore />
      ) : show === 'search' ? (
        <Search />
      ) : show === 'favorite' ? (
        <Favorite />
      ) : show === 'myitems' ? (
        <MyItems />
      ) : show === 'inbox' ? (
        <Inbox />
      ) : show === 'more' ? (
        <UserContext.Provider value={{firstName, setFirstName}}>
          <More />
        </UserContext.Provider>
      ) : show === 'settings' ? (
        <AccountSettings />
      ) : show === 'message' ? (
        <MessageDetail />
      ) : show === 'reserve' ? (
        <ReserveDetail />
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
    width: 148.4,
    height: 142.8,
  },
});

export default App;
