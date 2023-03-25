import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Detail = () => {
  return (
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
        android_ripple={{color: '#ccc', borderless: true}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(66, 38, 241, .8)' : '#4226F1',
          },
          styles.button,
        ]}>
        <Text style={styles.buttonText}>SELECT DATE FOR REQUEST</Text>
      </Pressable>
    </View>
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
});

export default Detail;
