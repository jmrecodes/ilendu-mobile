import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import commonStyles from '../Product/commonStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

const Message = ({read = false}) => {
  return (
    <View style={[read === true ? styles.blur : null, styles.main, commonStyles.flexRow]}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../images/circle-white.png')}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
          style={[commonStyles.border, styles.image]}></ImageBackground>
      </View>
      <View style={styles.desc}>
        <Text style={commonStyles.bold}>Profile name</Text>
        <Text style={commonStyles.paddingVerticalSmall}>
          Message text in here in this style to look like you have lots of
          friends!
        </Text>
        <Text style={[commonStyles.small, commonStyles.silent]}>Friday, 5 Aug 15:30</Text>
      </View>
      <View style={styles.detailBtnContainer}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
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
  desc: {
    width: '70%',
  },
  detailBtnContainer: {
    width: '10%',
    justifyContent: 'center',
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
  blur: {
    opacity: 0.3,
  },
});

export default Message;
