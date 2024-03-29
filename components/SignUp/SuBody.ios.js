import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../LoggedIn/Product/commonStyles';

const SuBody = ({handleClick}) => {
  const [email, onChangeEmail] = useState('');
  const [firstname, onChangeFn] = useState('');
  const [lastname, onChangeLn] = useState('');
  const [password, onChangePassword] = useState('');
  const [toggleAgree, setToggleAgree] = useState(false);
  const [toggleUpdates, setToggleUpdates] = useState(false);

  return (
    <View style={styles.body}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFn}
          value={firstname}
          placeholder={'First Name'}
          placeholderTextColor="#8A8A8A"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          onChangeText={onChangeLn}
          value={lastname}
          placeholder={'Last Name'}
          placeholderTextColor="#8A8A8A"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          onChangeText={onChangeEmail}
          value={email}
          placeholder={'Email'}
          placeholderTextColor="#8A8A8A"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          onChangeText={onChangePassword}
          value={password}
          placeholder={'Password'}
          placeholderTextColor="#8A8A8A"
          secureTextEntry={true}
        />
      </View>

      <Text style={styles.passSub}>
        At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
      </Text>

      <View style={styles.agreeUpdatesContainer}>
        <View style={[styles.inputContainer, styles.checkBoxContainer]}>
          <CheckBox
            onTintColor={'#333'}
            onCheckColor={'#333'}
            disabled={false}
            value={toggleUpdates}
            boxType="square"
            onValueChange={newValue => setToggleUpdates(newValue)}
            style={styles.checkBox}
          />
          <Text style={[styles.tos, styles.updates]}>
            Yes, send me deals, discounts, and updates!
          </Text>
        </View>
      </View>

      <Pressable
        onPress={handleClick}
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
          useAngle={true} angle={-15} angleCenter={{x:0.5,y:0}}>
          <Text style={[styles.buttonText, styles.signUp]}>CREATE ACCOUNT</Text>
        </LinearGradient>
      </Pressable>

      <Text style={[styles.buttonSub, commonStyles.center]}>
        By clicking Create Account, you agree to our
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
    paddingVertical: 15,
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
});

export default SuBody;
