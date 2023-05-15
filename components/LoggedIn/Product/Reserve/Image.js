import {ImageBackground, View, Text, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from '../commonStyles';
import ShowContext from '../../../ShowContext';
import {useContext} from 'react';

const Image = () => {
  const {setShow} = useContext(ShowContext);

  const showProduct = () => {
    setShow('product');
  };

  return (
    <View style={[styles.itemCon, commonStyles.beautifulBox]}>
      <View style={styles.itemDesc}>
        <Pressable
          onPress={showProduct}
          android_ripple={{color: '#ccc', borderless: false}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(33, 33, 33, .1)' : 'transparent',
            },
            styles.header,
          ]}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </Pressable>

        <View style={styles.itemDescMain}>
          <Text
            style={[
              commonStyles.bold,
              commonStyles.alignCenter,
            ]}>
            Long item name
          </Text>

          <Text style={[commonStyles.small, commonStyles.alignCenter]}>Short description. Lorem ipsum dolor sit amet.</Text>

          <View style={commonStyles.mt1}>
            <Text style={styles.available}>
              <FontAwesomeIcon
                style={styles.circle}
                icon="fa-solid fa-circle"
                size={10}
              />
              <Text style={commonStyles.small}>Available to borrow</Text>
            </Text>

            <Text style={styles.available}>
              <FontAwesomeIcon
                style={styles.circle}
                icon="fa-solid fa-circle"
                size={10}
              />
              <Text style={commonStyles.small}>
                Available to get for free
              </Text>
            </Text>
          </View>

          <Text style={[styles.lendersName, commonStyles.alignCenter, commonStyles.underline, commonStyles.mt2, commonStyles.bold]}>Lender's name</Text>
        </View>
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
    marginTop: 5,
  },
  header: {
    width: '100%',
    paddingLeft: 10,
    paddingVertical: 5,
  },
  itemDesc: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .8)',
  },
  itemDescMain: {
    paddingHorizontal: 10,
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
  lendersName: {
    marginTop: 20,
    color: '#4226F1',
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
