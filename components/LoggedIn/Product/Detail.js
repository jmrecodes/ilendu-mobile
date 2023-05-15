import {Animated, Dimensions, Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useContext, useRef, useState} from 'react';
import commonStyles from './commonStyles';
import DatePicker from 'react-native-modern-datepicker';
import ShowContext from '../../ShowContext';

const Detail = () => {
  const [menu, setMenu] = useState(0);
  const [saveDate, setSaveDate] = useState(false);
  const {setShow} = useContext(ShowContext);

  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('screen').height + 200),
  ).current;

  let slideIn: function;
  slideIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  let slideOut: function;
  slideOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height + 200,
      duration: 450,
      useNativeDriver: true,
    }).start();
  };

  let slideOutNSave: function;
  slideOutNSave = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 450,
      useNativeDriver: true,
    }).start();

    setSaveDate(true);
  };

  const showDatePicker = () => {
    if (menu === 0) {
      slideIn();
      setMenu(1);
    } else {
      slideOut();
      setMenu(0);
    }
  };

  const showReserveDetail = () => {
    setShow('reserve');
  };

  return (
    <>
      <View style={styles.detail}>
        <Text>
          From&nbsp;
          <Text style={[styles.name, styles.underline]}>George A.</Text>
        </Text>

        <Text style={styles.itemName}>Long item name</Text>

        <Text style={styles.itemStar}>
          4.1 &nbsp;
          <FontAwesomeIcon style={styles.star} icon="fa-solid fa-star" />
          <Text style={styles.using}>(4 people used this item)</Text>
        </Text>

        <Text style={styles.available}>
          <FontAwesomeIcon
            style={styles.circle}
            icon="fa-solid fa-circle"
            size={10}
          />
          <Text>Available to borrow</Text>
        </Text>

        <Text style={styles.available}>
          <FontAwesomeIcon
            style={styles.circle}
            icon="fa-solid fa-circle"
            size={10}
          />
          <Text style={styles.underline}>
            Available to get for free
          </Text>
        </Text>

        <Pressable
          onPress={saveDate === false ? showDatePicker : showReserveDetail}
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(66, 38, 241, .8)' : '#4226F1',
            },
            styles.button,
          ]}>
          <Text style={styles.buttonText}>
            { saveDate === false ? 'SELECT DATE FOR REQUEST' : 'CONTINUE' }
          </Text>
        </Pressable>
      </View>

      <Animated.View
        style={[
          styles.menu,
          {transform: [{translateY: slideAnim}, {perspective: 1000}]},
        ]}>
        <Pressable
          onPress={showDatePicker}
          android_ripple={{color: '#ccc', borderless: false}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
            },
            styles.header,
          ]}>
          <FontAwesomeIcon size={30} icon="fa-solid fa-xmark" />
        </Pressable>
        <View style={styles.dateMain}>
          <View style={[styles.date, commonStyles.flexRow, commonStyles.flexSpaceEven]}>
            <Text style={[commonStyles.h2, commonStyles.white]}>From</Text>
            <Text style={[commonStyles.h2, commonStyles.bold, commonStyles.white]}>19th of Aug, 2023</Text>
            <FontAwesomeIcon style={commonStyles.white} icon="fa-solid fa-pen" />
          </View>

          <View style={[styles.date2, commonStyles.flexRow, commonStyles.flexSpaceEven]}>
            <Text style={[commonStyles.h2, commonStyles.white]}>From</Text>
            <Text style={[commonStyles.h2, commonStyles.bold, commonStyles.white]}>21st of Aug, 2023</Text>
            <FontAwesomeIcon style={commonStyles.white} icon="fa-solid fa-pen" />
          </View>

          <DatePicker
            options={{
              textHeaderColor: '#333',
              textDefaultColor: '#333',
              selectedTextColor: '#fff',
              mainColor: '#4226F1',
              textSecondaryColor: '#333',
              borderColor: 'rgba(122, 146, 165, 0.1)',
            }}
            current="2023-08-21"
            selected="2023-08-21"
            mode="calendar"
            minuteInterval={30}
            style={[styles.datePicker, commonStyles.beautifulBox]}
          />
        </View>

        <View style={styles.lineTop}>
          <Pressable
            onPress={slideOutNSave}
            android_ripple={{color: '#ccc', borderless: false}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(68, 38, 241, .5)' : 'rgb(68, 38, 241)',
              },
              styles.saveBtn
            ]}>
            <Text style={[commonStyles.white, commonStyles.alignCenter]}>SAVE</Text>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  detail: {
    paddingHorizontal: 20,
  },
  name: {
    color: '#8977F6',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  itemName: {
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 10,
  },
  itemStar: {
    fontWeight: 'bold',
  },
  star: {
    color: '#4226F1',
    marginTop: -2,
  },
  using: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  circle: {
    color: '#B1D260',
    marginRight: 10,
  },
  available: {
    marginTop: 15,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 30,
  },
  buttonText: {
    color: 'rgb(250, 250, 250)',
    textAlign: 'center',
  },
  menu: {
    textAlign: 'center',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgb(250, 250, 250)',
    zIndex: 100,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingLeft: 15,
  },
  text: {
    fontWeight: '300',
    marginTop: -2.5,
    marginLeft: 15,
  },
  dateMain: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  date: {
    backgroundColor: '#4226F1',
    paddingVertical: 7,
    alignItems: 'center',
    marginBottom: 20,
  },
  date2: {
    backgroundColor: '#333',
    paddingVertical: 7,
    alignItems: 'center',
    marginBottom: 20,
  },
  datePicker: {
    backgroundColor: '#F1F1F1',
    marginBottom: 20,
  },
  lineTop: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#E1E1E1',
  },
  saveBtn: {
    marginTop: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
});

export default Detail;
