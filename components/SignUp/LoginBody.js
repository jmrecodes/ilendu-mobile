import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../LoggedIn/Product/commonStyles';
import ShowContext from '../ShowContext';
import UserContext from '../UserContext';

const LoginBody = ({handleClick}) => {
  const [email, onChangeEmail] = useState('');
  const [firstname, onChangeFn] = useState('');
  const [lastname, onChangeLn] = useState('');
  const [password, onChangePassword] = useState('');
  const [toggleAgree, setToggleAgree] = useState(false);
  const [toggleUpdates, setToggleUpdates] = useState(false);

  const [login, setLogin] = useState('');
  const {setFirstName} = useContext(UserContext);

  const loginCheck = () => {
    return fetch('https://dev.ilendu.co/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.status === 'ok') {
          console.log(json);
          setLogin(true);
          setFirstName(json.first_name);
          handleClick();
        } else {
          console.log(json);
          setLogin(false);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onClickEmailPass = () => {
    setLogin('');
  };

  return (
    <View style={styles.body}>
      <Pressable
        onPress={handleClick}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgba(230, 230, 230, .3)'
              : 'rgb(255, 255, 255)',
          },
          styles.button,
          styles.login,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={[commonStyles.flexRow, styles.fb]}>
          <FontAwesomeIcon
            style={styles.icon}
            size={25}
            icon="fa-brands fa-facebook"
            color={'#316CCB'}
          />
          <Text style={styles.loginText}>&nbsp; Login with Facebook</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={handleClick}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgba(230, 230, 230, .3)'
              : 'rgb(255, 255, 255)',
          },
          styles.button,
          styles.login,
        ]}
        android_ripple={{color: '#ccc', borderless: false}}>
        <View style={[commonStyles.flexRow, styles.fb]}>
          <FontAwesomeIcon
            style={styles.icon}
            size={25}
            icon="fa-brands fa-google"
          />
          <Text style={styles.loginText}>&nbsp; Login with Google</Text>
        </View>
      </Pressable>

      <Text
        style={[
          styles.email,
          commonStyles.center,
          commonStyles.small,
          commonStyles.silent,
        ]}>
        Or login with your email
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, login === false ? styles.red : null]}
          autoCapitalize="none"
          onChangeText={e => {
            onChangeEmail(e);
            onClickEmailPass(e);
          }}
          onFocus={onClickEmailPass}
          value={email}
          placeholder="Email"
          placeholderTextColor="#8A8A8A"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, login === false ? styles.red : null]}
          onChangeText={e => {
            onChangePassword(e);
            onClickEmailPass(e);
          }}
          onFocus={onClickEmailPass}
          value={password}
          placeholder={'Password'}
          placeholderTextColor="#8A8A8A"
          secureTextEntry={true}
        />
      </View>

      <Text style={styles.passSub}>
        At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
      </Text>

      <Pressable
        onPress={loginCheck}
        android_ripple={{color: '#ccc', borderless: false}}
        style={({pressed}) => [
          [styles.button, styles.buttonContainer],
          {
            paddingTop: pressed ? 2 : 0,
            marginBottom: pressed ? 13 : 15,
          },
        ]}>
        <LinearGradient
          colors={['#DD8593', '#C96FD8']}
          style={[styles.button, styles.gradient]}
          useAngle={true}
          angle={-15}
          angleCenter={{x: 0.5, y: 0}}>
          <Text style={[styles.buttonText, styles.signUp]}>LOGIN</Text>
        </LinearGradient>
      </Pressable>

      <Text style={[styles.buttonSub, commonStyles.center]}>
        By clicking Login, you agree to our
      </Text>
      <Text
        style={[styles.buttonSub, commonStyles.center, commonStyles.underline]}>
        Terms of Service and Privacy Policy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    paddingBottom: 30,
    paddingHorizontal: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  agreeUpdatesContainer: {
    marginTop: 40,
  },
  checkBoxContainer: {
    marginTop: -10,
    paddingHorizontal: 20,
  },
  checkBox: {
    transform: [{scaleX: 0.75}, {scaleY: 0.75}],
  },
  input: {
    paddingBottom: 2,
    width: '90%',
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: 2,
  },
  passSub: {
    fontSize: 10,
    color: '#A1A1A1',
    width: '80%',
    textAlign: 'right',
  },
  ln: {
    marginTop: 20,
    marginLeft: 26,
  },
  tos: {
    fontSize: 13,
    marginTop: -10,
  },
  bold: {
    fontWeight: 'bold',
  },
  view: {
    paddingLeft: 37,
  },
  updates: {
    marginTop: 7,
  },
  button: {
    borderRadius: 25,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 15,
  },
  buttonText: {
    color: '#eee',
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  buttonSub: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  login: {
    marginBottom: 5,
  },
  fb: {
    width: 220,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    borderRadius: 25,
  },
  email: {
    marginVertical: 20,
  },
  red: {
    color: '#CB402D',
  },
});

export default LoginBody;
