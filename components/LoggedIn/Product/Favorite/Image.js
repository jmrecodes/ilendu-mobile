import {ImageBackground, View, Text, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from '../commonStyles';

const Image = () => {
  return (
    <View style={[styles.itemCon, commonStyles.beautifulBox]}>
      <View style={styles.itemDesc}>
        <Text
          style={[
            commonStyles.h3,
            commonStyles.bold,
            commonStyles.alignCenter,
          ]}>
          Item name
        </Text>

        <Pressable
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed
                ? 'rgba(33, 33, 33, .8)'
                : '#333',
            },
            styles.button,
          ]}>
          <Text style={[commonStyles.alignCenter, commonStyles.light]}>Request product</Text>
        </Pressable>

        <Text style={[commonStyles.alignCenter, commonStyles.underline, commonStyles.mt1]}>Add to list</Text>

        <View style={commonStyles.mt1}>
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
            <Text>
              Available to get for free
            </Text>
          </Text>
        </View>

        <Text style={[commonStyles.alignCenter, commonStyles.underline, commonStyles.mt2]}>Remove from wish list</Text>
      </View>

      <View style={styles.imageCon}>
        <ImageBackground
          source={require('../../../../images/image-regular.png')}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
          style={styles.image}>
          <View style={styles.daysCon}>
            <Text style={styles.days}>5 days on ilendu</Text>
          </View>
        </ImageBackground>
        <View style={styles.shareHeart}>
          <FontAwesomeIcon
            style={styles.icons}
            icon="fa-solid fa-heart"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCon: {
    flex: 1,
    flexDirection: 'row',
  },
  itemDesc: {
    width: '50%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .8)',
  },
  button: {
    width: 150,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 10,
  },
  circle: {
    color: '#B1D260',
    marginRight: 10,
  },
  available: {
    marginTop: 15,
    width: '100%',
  },
  imageCon: {
    width: '50%',
    height: 250,
    backgroundColor: 'rgba(220, 220, 220, .5)',
  },
  image: {
    width: '100%',
    flexDirection: 'row',
  },
  imageStyle: {
    width: 75,
    height: 75,
    position: 'absolute',
    left: '50%',
    marginLeft: -32.5,
    marginTop: 75,
  },
  daysCon: {
    backgroundColor: '#444',
    borderBottomRightRadius: 5,
  },
  days: {
    color: '#ddd',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderBottomRightRadius: 5,
  },
  shareHeart: {
    position: 'absolute',
    top: 'auto',
    bottom: 10,
    right: 10,
  },
  icons: {
    marginLeft: 10,
  },
  slideButtonsCon: {
    flexDirection: 'row',
    marginTop: 170,
  },
  slideButtons: {
    marginRight: 5,
  },
  lastButton: {
    marginRight: 0,
  },
});

export default Image;
