import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from '../LoggedIn/Product/commonStyles';
import ShowContext from '../ShowContext';

const SuHeader = ({handleClick, started, login}) => {
  const {setShow} = useContext(ShowContext);

  const showLogin = () => {
    setShow('login');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={[styles.header, commonStyles.flexRow, commonStyles.flexBetween]}>
        <Pressable
          onPress={handleClick}
          android_ripple={{color: '#ccc', borderless: false}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
            },
          ]}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </Pressable>

        <Text
          style={[styles.headerMainText, commonStyles.bold, commonStyles.h2]}>
          {login ? 'LOGIN' : 'CREATE AN ACCOUNT'}
        </Text>

        {login ? (
          <Text></Text>
        ) : (
          <Pressable
            onPress={showLogin}
            android_ripple={{color: '#ccc', borderless: false}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
              },
            ]}>
            <Text style={[styles.login]}>Login</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 50,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
  },
  headerMainText: {
    marginTop: -5,
    paddingLeft: 20,
  },
  login: {
    color: '#C888D1',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: '300',
    marginTop: -2.5,
    marginLeft: 15,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '500',
    color: '#333',
  },
});

export default SuHeader;
