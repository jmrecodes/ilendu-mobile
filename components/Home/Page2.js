import {Button, Image, StyleSheet, Text, View} from 'react-native';
import MainContainer from '../MainContainer';

const Page2 = () => {
  return (
    <View style={styles.main}>
      <View style={styles.logoCon}>
        <Image
          style={styles.logo}
          source={require('../../images/ilendu-app-black-logo.png')}
        />
      </View>

      <Image
        source={require('../../images/start-2.png')}
        style={styles.img}
        resizeMode={'contain'}
      />

      <View style={styles.heading}>
        <Text style={[styles.center, styles.h1]}>Help the</Text>
        <Text style={[styles.center, styles.h1]}>Environment</Text>

        <Text style={[styles.center, styles.subheading]}>
          Reduce waste and save money by sharing instead of buying
        </Text>
      </View>

      <View style={styles.slideIndicators}>
        <View style={styles.sI} />
        <View style={[styles.sI, styles.sIActive]} />
        <View style={styles.sI} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  logoCon: {
    marginTop: 60,
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  logo: {
    width: 165,
    height: 35,
  },
  img: {
    width: '90%',
    height: 300,
    marginTop: 20,
  },
  heading: {
    width: '70%',
  },
  h1: {
    fontSize: 36,
    fontWeight: '700',
  },
  center: {
    textAlign: 'center',
    fontSize: 18,
  },
  subheading: {
    marginVertical: 30,
  },
  slideIndicators: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sI: {
    width: 15,
    height: 3,
    backgroundColor: 'rgba(33, 33, 33, .5)',
  },
  sIActive: {
    width: 30,
    backgroundColor: 'rgba(33, 33, 33, 1)',
  },
});

export default Page2;
