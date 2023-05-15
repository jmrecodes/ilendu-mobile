import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import commonStyles from '../Product/commonStyles';

const Notification = ({showTab, showOverview, showReviews}) => {
  return (
    <View style={[styles.main, commonStyles.flexRow]}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../images/ilendu-app-white-logo-square.png')}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
          style={[commonStyles.border, styles.image]}></ImageBackground>
      </View>
      <View style={styles.desc}>
        <Text style={commonStyles.bold}>Welcome to Ilendu</Text>
        <Text style={commonStyles.paddingVerticalSmall}>Thanks for joining the community! Start your adenture now.</Text>
        <Text style={[commonStyles.small, commonStyles.silent]}>Friday, 5 Aug 15:30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E1E1E1',
  },
  imageContainer: {
    minWidth: 50,
    width: '20%',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageStyle: {
    width: 25,
    height: 25,
    marginTop: 5,
    marginLeft: 7,
  },
  desc: {
    width: '80%',
  },
});

export default Notification;
