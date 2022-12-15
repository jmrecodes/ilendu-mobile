import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CheckBox from '@react-native-community/checkbox';

const SuBody = ({handleClick}) => {
  const [email, onChangeEmail] = useState('');
  const [firstname, onChangeFn] = useState('');
  const [lastname, onChangeLn] = useState('');
  const [password, onChangePassword] = useState('');
  const [toggleAgree, setToggleAgree] = useState(true);
  const [toggleUpdates, setToggleUpdates] = useState(true);

  return (
    <View style={styles.body}>
      <Text style={styles.title}>EMAIL SIGN UP</Text>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder={'Email'}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeFn}
          value={firstname}
          placeholder={'First Name'}
        />

        <View style={styles.br}></View>

        <TextInput
          style={[styles.input, styles.ln]}
          onChangeText={onChangeLn}
          value={lastname}
          placeholder={'Last Name'}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon="fa-solid fa-lock" />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder={'Password'}
        />
      </View>

      <View style={styles.agreeUpdatesContainer}>
        <View style={[styles.inputContainer, styles.checkBoxContainer]}>
          <CheckBox
            tintColors={{true: '#333', false: '#333'}}
            disabled={false}
            value={toggleAgree}
            onValueChange={newValue => setToggleAgree(newValue)}
          />
          <Text style={styles.tos}>I agree to the </Text>
          <Text style={[styles.tos, styles.bold]}>Terms of Service</Text>
          <Text style={styles.tos}> and</Text>
          <Text style={[styles.tos, styles.bold]}> Privacy Policy.</Text>
          <Text style={[styles.tos, styles.bold, styles.view]}>View terms of services and privacy policy.</Text>
        </View>

        <View style={[styles.inputContainer, styles.checkBoxContainer]}>
          <CheckBox
            tintColors={{true: '#333', false: '#333'}}
            disabled={false}
            value={toggleUpdates}
            onValueChange={newValue => setToggleUpdates(newValue)}
          />
          <Text style={[styles.tos, styles.updates]}>
            Yes, send me deals, discounts, and updates!
          </Text>
        </View>
      </View>

      <Pressable
        onPress={handleClick}
        style={styles.button}
        android_ripple={{color: '#ccc', borderless: false}}>
        <Text style={styles.buttonText}>Sign up with emai</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 50,
    paddingVertical: 65,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    paddingBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  agreeUpdatesContainer: {
    marginTop: 40,
  },
  checkBoxContainer: {
    marginTop: -10,
  },
  input: {
    marginLeft: 10,
    marginTop: -20,
    paddingLeft: 20,
    paddingBottom: 2,
    width: '90%',
    borderBottomColor: '#777',
    borderBottomWidth: 2,
  },
  ln: {
    marginTop: 5,
    marginLeft: 26,
  },
  tos: {
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  view: {
    paddingLeft: 32,
    paddingTop: 10,
  },
  updates: {
    marginTop: 7,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 25,
  },
  buttonText: {
    color: '#eee',
    textAlign: 'center',
    paddingVertical: 15,
  },
});

export default SuBody;
