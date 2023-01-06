import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
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

        <View style={styles.br} />

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
            onTintColor={'#333'}
            onCheckColor={'#333'}
            disabled={false}
            value={toggleAgree}
            onValueChange={newValue => setToggleAgree(newValue)}
            style={styles.checkBox}
          />
          <Text style={styles.tos}>I agree to the </Text>
          <Text style={[styles.tos, styles.bold]}>Terms of Service</Text>
          <Text style={styles.tos}> and</Text>
          <Text style={[styles.tos, styles.bold]}> Privacy Policy.</Text>
          <Text style={[styles.tos, styles.bold, styles.view]}>
            View terms of services and privacy policy.
          </Text>
        </View>

        <View style={[styles.inputContainer, styles.checkBoxContainer]}>
          <CheckBox
            onTintColor={'#333'}
            onCheckColor={'#333'}
            disabled={false}
            value={toggleUpdates}
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
          {
            backgroundColor: pressed ? '#000' : '#333',
          },
          styles.button,
        ]}>
        <Text style={styles.buttonText}>Sign up with email</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 65,
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
    marginBottom: 30,
    paddingHorizontal: 50,
  },
  agreeUpdatesContainer: {
    marginTop: 40,
  },
  checkBoxContainer: {
    marginTop: -10,
    paddingHorizontal: 20,
  },
  checkBox: {
    marginRight: 5,
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
    marginTop: 20,
    marginLeft: 26,
  },
  tos: {
    fontSize: 12,
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
    marginHorizontal: 50,
  },
  buttonText: {
    color: '#eee',
    textAlign: 'center',
    paddingVertical: 15,
  },
});

export default SuBody;
